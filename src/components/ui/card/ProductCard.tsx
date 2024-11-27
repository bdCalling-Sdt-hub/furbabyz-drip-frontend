import { IMAGE_URL } from '@/redux/base/baseApi';
import { TProduct } from '@/redux/features/product/productApi';
import { useAddWishlistMutation, useGetWishlistQuery, useRemoveWishlistMutation } from '@/redux/features/wishlist/wishlistApi';
import { useAppSelector } from '@/redux/hooks';
import { notification } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const ProductCard = ({ product }: { product: TProduct }) => {
      const [addWishlist] = useAddWishlistMutation();
      const [removeWishlist] = useRemoveWishlistMutation();
      const { user } = useAppSelector((state) => state.auth);
      const { data: wishlist } = useGetWishlistQuery(undefined, { skip: !user });
      const isFavorite = wishlist?.some((wishlist: any) => wishlist?.product === product?._id);

      const handleToggleWishlist = async (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();

            if (!user) {
                  notification.error({
                        message: 'Please login to add wishlist',
                  });
                  return;
            }

            try {
                  if (isFavorite) {
                        const res = await removeWishlist(product._id).unwrap();

                        if (res.success) {
                              notification.success({
                                    message: res.message,
                              });
                        }
                  } else {
                        const res = await addWishlist(product._id).unwrap();

                        if (res.success) {
                              notification.success({
                                    message: res.message,
                              });
                        }
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.message || 'Failed to update favorite',
                  });
            }
      };

      return (
            <div key={product?._id} className="px-2 my-6 h-full">
                  <div className="product-card bg-[#FBFBFB] relative h-full w-full rounded-lg overflow-hidden">
                        <Image
                              src={`${IMAGE_URL}/${product.image[0]}`}
                              alt={product?.name}
                              width={300}
                              height={300}
                              className="object-cover mx-auto w-full h-[266px]"
                        />
                        <Link href={`/products/${product._id}`}>
                              <div className="p-4 h-full text-start">
                                    <h2 className="text-lg text-title font-medium">{product?.name}</h2>
                                    <p className="text-xl text-primary font-medium">$ {product.price}</p>
                              </div>
                        </Link>
                        <div onClick={handleToggleWishlist}>
                              {isFavorite ? (
                                    <GoHeartFill className="absolute top-6 right-6 text-[#D69CA5] text-3xl cursor-pointer" />
                              ) : (
                                    <GoHeart className="absolute top-6 right-6 text-[#D69CA5] text-3xl cursor-pointer" />
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default ProductCard;
