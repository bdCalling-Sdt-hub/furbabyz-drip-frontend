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

const LimitedEdition = () => {
      const [wishList, setWishlist] = useState<number[]>([]); // Array of product IDs in the wishlist
      const carouselRef = useRef<any>(null);

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
      const toggleWishlist = (id: number) => {
            setWishlist((prevWishlist) =>
                  prevWishlist.includes(id) ? prevWishlist.filter((itemId) => itemId !== id) : [...prevWishlist, id]
            );
      };

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
                        {products.map((product) => (
                              <div key={product.id} className="px-2 my-6">
                                    <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                                          <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={300}
                                                className="object-contain mx-auto"
                                          />
                                          <Link href={`/products/${product.id}`}>
                                                <div className="p-4 h-full text-start">
                                                      <h2 className="text-lg text-title font-medium truncate">{product.title}</h2>
                                                      <p className="text-xl text-primary font-medium">{product.price}</p>
                                                      <div className="flex items-center justify-start text-yellow-400 mb-2">
                                                            {[...Array(product.rating)].map((rating, index) => {
                                                                  return <RxStarFilled key={index} size={16} />;
                                                            })}
                                                            {/* <span className="ml-2 text-[12px]">{product.rating}</span> */}
                                                            <span className="ml-2 text-gray-500">({product.reviews})</span>
                                                      </div>
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

export default LimitedEdition;
