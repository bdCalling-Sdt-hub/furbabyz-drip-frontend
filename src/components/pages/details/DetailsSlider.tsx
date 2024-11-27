'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

import PlayIcon from '@/assets/images/details/play-icon.png';
import { TProduct } from '@/redux/features/product/productApi';
import { IMAGE_URL } from '@/redux/base/baseApi';

interface DetailsSliderProps {
      product: TProduct;
}

const DetailsSlider: React.FC<DetailsSliderProps> = ({ product }) => {
      const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
      const [activeIndex, setActiveIndex] = useState(0);

      const images = product?.image;
      const video = product?.video;

      const renderMainSlide = (image: string, index: number) => (
            <SwiperSlide className="mx-auto" key={index}>
                  <div className="w-full h-[535px] mx-auto">
                        <Image
                              width={500}
                              height={500}
                              alt={`Product image ${index + 1}`}
                              className="w-full h-full mx-auto object-contain"
                              src={`${IMAGE_URL}/${image}`}
                        />
                  </div>
            </SwiperSlide>
      );

      // Todo: Need Description filed from backend
      const renderThumbnailSlide = (image: string, index: number) => (
            <SwiperSlide className="bg-re" key={index}>
                  <div className={`border rounded-xl cursor-pointer ${index === activeIndex ? 'border-blue-500' : 'border-gray-300'}`}>
                        <Image
                              width={500}
                              height={500}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-[110.07px] object-contain"
                              src={`${IMAGE_URL}/${image}`}
                        />
                  </div>
            </SwiperSlide>
      );

      const renderVideoSlide = () => (
            <SwiperSlide className="">
                  <div className="h-[535px] mx-auto relative">
                        {/* Video Element */}
                        <video
                              className="w-full h-full object-cover rounded-lg"
                              controls
                              poster={images[0] || '/images/default-video-poster.jpg'}
                        >
                              <source src={`${IMAGE_URL}/${video}`} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                  </div>
            </SwiperSlide>
      );

      const renderVideoThumbnail = () => (
            <SwiperSlide className="w-full">
                  <div
                        className={`me-auto border rounded-xl cursor-pointer ${
                              images.length === activeIndex ? 'border-blue-500' : 'border-gray-300'
                        }`}
                  >
                        <div className="relative">
                              <Image
                                    width={500}
                                    height={500}
                                    alt="Video thumbnail"
                                    className="w-full h-[110.07px] object-contain"
                                    src={`${IMAGE_URL}/${images[0]}`}
                              />
                              {/* Play button for the thumbnail */}
                              <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
                                    <Image className="size-[40px]" src={PlayIcon} width={40} height={40} alt="Play icon" />
                              </div>
                        </div>
                  </div>
            </SwiperSlide>
      );

      return (
            <>
                  {/* Main Swiper */}
                  <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2 border rounded-xl"
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  >
                        {images?.map((image, index) => renderMainSlide(image, index))}
                        {video && renderVideoSlide()}
                  </Swiper>

                  {/* Thumbnail Swiper */}
                  <div className="my-5">
                        <Swiper
                              onSwiper={setThumbsSwiper}
                              spaceBetween={10}
                              slidesPerView={4}
                              freeMode={true}
                              watchSlidesProgress={true}
                              modules={[FreeMode, Navigation, Thumbs]}
                              className="mySwiper p-2 rounded-xl gap"
                        >
                              {images?.slice(0, 3)?.map((image, index) => renderThumbnailSlide(image, index))}
                              {video && renderVideoThumbnail()}
                        </Swiper>
                  </div>

                  <div>
                        <h1 className="text-title font-medium text-lg">Description</h1>
                        <p className="text-text-secondary">
                              {/* Need this description dynamic*/}
                              {product?.description ||
                                    'Let your pet wear their swag loud and proud in the FurBabyz Graffiti Hoodie. Designed with vibrant colors and bold streetwear graphics, this hoodie is perfect for pets who love making a statement. Made with soft, durable fabric, it provides warmth and comfort for those cooler days at the park.'}
                        </p>
                  </div>
            </>
      );
};

export default DetailsSlider;
