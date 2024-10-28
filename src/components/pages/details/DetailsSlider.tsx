'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

import PlayIcon from '@/assets/images/details/play-icon.png';
import Bag1 from '@/assets/images/details/bag1.png';
import Bag2 from '@/assets/images/details/bag2.png';
import Bag3 from '@/assets/images/details/bag3.png';

const DetailsSlider: React.FC = () => {
      const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
      const [activeIndex, setActiveIndex] = useState(0); //*THIS IS FOR ACTIVE SLIDE
      const images = [Bag1, Bag2, Bag3];

      const renderMainSlide = (image: StaticImageData, index: number) => (
            <SwiperSlide className=" mx-auto" key={index}>
                  <div className="w-full h-[535px] mx-auto">
                        <Image width={500} height={500} alt="img" className="w-full h-full mx-auto object-contain" src={image} />
                  </div>
            </SwiperSlide>
      );

      const renderThumbnailSlide = (image: StaticImageData, index: number) => (
            <SwiperSlide className=" bg-re" key={index}>
                  <div className={`  border rounded-xl cursor-pointer ${index === activeIndex ? 'border-blue-500' : 'border-gray-300'}`}>
                        <Image width={500} height={500} alt="img" className="w-full h-[110.07px] object-contain" src={image} />
                  </div>
            </SwiperSlide>
      );

      const renderVideoSlide = () => (
            <SwiperSlide className="">
                  <div className="h-[535px] mx-auto relative">
                        {/* Video Element */}
                        <video className="w-full h-full object-cover rounded-lg" controls poster={Bag1.src}>
                              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                  </div>
            </SwiperSlide>
      );

      const renderVideoThumbnail = () => (
            <SwiperSlide className="w-full">
                  <div
                        className={` me-auto border rounded-xl cursor-pointer ${
                              images.length === activeIndex ? 'border-blue-500' : 'border-gray-300'
                        }`}
                  >
                        <div className="relative">
                              {/* Thumbnail image */}
                              <Image
                                    width={500}
                                    height={500}
                                    alt="video-thumbnail"
                                    className="w-full h-[110.07px] object-contain"
                                    src={Bag1}
                              />
                              {/* Play button for the thumbnail */}
                              <div className="absolute  inset-0 flex items-center justify-center  bg-opacity-50 rounded-lg">
                                    <Image className="size-[40px]" src={PlayIcon} width={400} height={500} alt="icon" />
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
                        {images.map((image, index) => renderMainSlide(image, index))}
                        {renderVideoSlide()}
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
                              {images.map((image, index) => renderThumbnailSlide(image, index))}
                              {renderVideoThumbnail()} {/*  thumbnail for the video */}
                        </Swiper>
                  </div>
                  <div>
                        <h1 className="text-title font-medium text-lg">Description</h1>
                        <p className="text-text-secondary">
                              Let your pet wear their swag loud and proud in the FurBabyz Graffiti Hoodie. Designed with vibrant colors and
                              bold streetwear graphics, this hoodie is perfect for pets who love making a statement. Made with soft, durable
                              fabric, it provides warmth and comfort for those cooler days at the park.
                        </p>
                  </div>
            </>
      );
};

export default DetailsSlider;
