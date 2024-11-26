'use client';
import { useRef } from 'react';
import { Carousel } from 'antd';
import CarouselNavigation from '@/components/ui/carousel/CarouselNavigation';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import { settings } from '@/const/const';
import { useGetNewArrivalsQuery } from '@/redux/features/product/productApi';

import ProductCard from '@/components/ui/card/ProductCard';

const NewDrip = () => {
      const { data: products } = useGetNewArrivalsQuery([]);

      const carouselRef = useRef<any>(null);

      const next = () => {
            carouselRef.current.next();
      };

      const prev = () => {
            carouselRef.current.prev();
      };

      //       if (!user) {
      //             notification.error({
      //                   message: 'Please login to add wishlist',
      //             });
      //             return;
      //       }

      //       try {
      //             if (isFavorite) {
      //                   // Remove from favorites
      //                   const res = await removeFavorite(space._id).unwrap();

      //                   if (res.success) {
      //                         notification.success({
      //                               message: res.message,
      //                               placement: 'topRight',
      //                               duration: 5,
      //                         });
      //                   }
      //             } else {
      //                   const res = await addFavorite({
      //                         spaceId: space._id,
      //                   }).unwrap();

      //                   if (res.success) {
      //                         notification.success({
      //                               message: res.message,
      //                               placement: 'topRight',
      //                               duration: 5,
      //                         });
      //                   }
      //             }
      //       } catch (error: any) {
      //             notification.error({
      //                   message: error?.message || 'Failed to update favorite',
      //             });
      //       }
      // };

      return (
            <div className="container relative my-10">
                  <div className="flex px-2 items-center text-secondary justify-between">
                        <h1 className="text-xl font-medium md:text-3xl text-center">New Arrivals</h1>
                        <button>
                              <Link className="flex text-sm md:text-lg items-center text-secondary/90 gap-2" href={'/products'}>
                                    Shop New Arrivals
                                    <MdArrowRightAlt size={24} />
                              </Link>
                        </button>
                  </div>
                  <Carousel {...settings} ref={carouselRef} className="product-carousel">
                        {products?.map((product) => (
                              <ProductCard product={product} key={product._id} />
                        ))}
                  </Carousel>
                  <CarouselNavigation key={'carousel'} next={next} prev={prev} />
            </div>
      );
};

export default NewDrip;
