'use client';
import { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { RxStarFilled } from 'react-icons/rx';
import { MdArrowRightAlt } from 'react-icons/md';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import CarouselNavigation from '@/components/ui/carousel/CarouselNavigation';
import Link from 'next/link';
import { products } from '@/const/const';
import { TProduct, useGetLimitedAdditionQuery } from '@/redux/features/product/productApi';
import ProductCard from '@/components/ui/card/ProductCard';

const LimitedEdition = () => {
      const carouselRef = useRef<any>(null);
      const { data: limitedProducts } = useGetLimitedAdditionQuery([]);

      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            arrows: false,
            responsive: [
                  { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                  { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                  { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
      };

      const next = () => {
            carouselRef.current.next();
      };

      const prev = () => {
            carouselRef.current.prev();
      };

      // Toggle the wishlist for a specific product ID

      return (
            <div className="container relative my-10">
                  <div className="flex px-2 items-center text-secondary justify-between">
                        <h1 className="text-xl font-medium md:text-3xl text-center">Shop Limited Editions</h1>
                        <button>
                              <Link className="flex text-sm md:text-lg items-center text-secondary/90 gap-2" href={'/products'}>
                                    Shop New Arrivals
                                    <MdArrowRightAlt size={24} />
                              </Link>
                        </button>
                  </div>
                  <Carousel {...settings} ref={carouselRef} className="product-carousel">
                        {limitedProducts?.map((product: TProduct) => (
                              <div key={product._id} className="px-4">
                                    <ProductCard product={product} />
                              </div>
                        ))}
                  </Carousel>
                  <CarouselNavigation key={'carousel'} next={next} prev={prev} />
            </div>
      );
};

export default LimitedEdition;
