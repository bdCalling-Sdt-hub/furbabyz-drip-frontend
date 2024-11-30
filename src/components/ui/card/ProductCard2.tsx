import { IMAGE_URL } from '@/redux/base/baseApi';
import { TProduct } from '@/redux/features/product/productApi';
import { useAddWishlistMutation, useGetWishlistQuery, useRemoveWishlistMutation } from '@/redux/features/wishlist/wishlistApi';
import { useAppSelector } from '@/redux/hooks';
import { notification } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { RxStarFilled } from 'react-icons/rx';

const ProductCard2 = ({ product }: { product: TProduct }) => {
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
            <Link href={`/products/${product._id}`} key={product._id} className="px-2">
                  <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                        <Image
                              src={`${IMAGE_URL}/${product?.image[0]}`}
                              alt={product?.name}
                              width={300}
                              height={300}
                              className="object-cover w-full h-[266px] mx-auto"
                        />
                        <div className="p-4 h-full text-center">
                              <h2 className="text-lg text-title font-semibold">{product?.name}</h2>
                              <div className="flex items-center justify-center text-yellow-500 mb-2">
                                    <RxStarFilled size={16} />
                                    <span className="ml-2 text-[12px]">{product?.rating ? product.rating : 0} / 5</span>
                                    <span className="ml-2 text-gray-500">({product?.count})</span>
                              </div>

                              <p className="text-xl font-medium">$ {product?.price.toFixed(2)}</p>
                        </div>
                        <div
                              onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleWishlist(e);
                              }}
                        >
                              {isFavorite ? (
                                    <GoHeartFill className="absolute top-6 right-6 text-yellow-400 text-3xl cursor-pointer" />
                              ) : (
                                    <GoHeart className="absolute top-6 right-6 text-yellow-400 text-3xl cursor-pointer" />
                              )}
                        </div>
                  </div>
            </Link>
      );
};

export default ProductCard2;
