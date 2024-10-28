'use client';
import { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

import CarouselNavigation from '@/components/ui/carousel/CarouselNavigation';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import { products, settings } from '@/const/const';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const NewDrip = () => {
      const [wishList, setWishlist] = useState<number[]>([]); // Store wishlist as an array of IDs
      const carouselRef = useRef<any>(null);

      const next = () => {
            carouselRef.current.next();
      };

      const prev = () => {
            carouselRef.current.prev();
      };

      // Toggle wishlist for a specific product ID
      const toggleWishlist = (id: number) => {
            setWishlist((prevWishlist) =>
                  prevWishlist.includes(id) ? prevWishlist.filter((itemId) => itemId !== id) : [...prevWishlist, id]
            );
      };

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
                        {products.map((product) => (
                              <div key={product.id} className="px-2 my-6">
                                    <div className="product-card bg-[#FBFBFB] relative h-full w-full rounded-lg overflow-hidden">
                                          <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={300}
                                                className="object-contain mx-auto"
                                          />
                                          <Link href={`/products/${product.id}`}>
                                                <div className="p-4 h-full text-start">
                                                      <h2 className="text-lg text-title font-medium">{product.title}</h2>
                                                      <p className="text-xl text-primary font-medium">{product.price}</p>
                                                </div>
                                          </Link>
                                          <div onClick={() => toggleWishlist(product.id)}>
                                                {wishList.includes(product.id) ? (
                                                      <BsSuitHeartFill className="absolute top-6 right-6 text-red-500 text-2xl cursor-pointer" />
                                                ) : (
                                                      <BsSuitHeart className="absolute top-6 right-6 text-black text-2xl hover:text-red-500 cursor-pointer" />
                                                )}
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </Carousel>
                  <CarouselNavigation key={'carousel'} next={next} prev={prev} />
            </div>
      );
};

export default NewDrip;
