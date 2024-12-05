'use client';
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import CarouselNavigation from '@/components/ui/carousel/CarouselNavigation';

import BlogCard from '@/components/ui/card/BlogCard';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
import { TBlog, useGetBlogsQuery } from '@/redux/features/blog/blogApi';
import { IMAGE_URL } from '@/redux/base/baseApi';

const BlogSection = () => {
      const carouselRef = useRef<any>(null);
      const { data: blogs } = useGetBlogsQuery([]);

      // const products = [
      //       {
      //             id: 1,
      //             image: Dog1,
      //             title: 'Special Winter Bulldog Jacket',
      //             date: '12th October 2023',
      //             description:
      //                   'Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog covers everything from seasonal style guides to behind-the-scenes looks at our latest collections.',
      //       },
      //       {
      //             id: 2,
      //             image: Dog2,
      //             title: 'Stylish Hoodie for Bull Terrier',
      //             date: '12th October 2023',
      //             description:
      //                   'Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog covers everything from seasonal style guides to behind-the-scenes looks at our latest collections.',
      //       },
      //       {
      //             id: 3,
      //             image: Dog3,
      //             title: 'Colorful Sweater for French Bulldog',
      //             date: '12th October 2023',
      //             description:
      //                   'Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog covers everything from seasonal style guides to behind-the-scenes looks at our latest collections.',
      //       },
      //       {
      //             id: 4,
      //             image: Dog4,
      //             title: 'Premium Jacket for Jack Russell',
      //             date: '12th October 2023',
      //             description:
      //                   'Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog covers everything from seasonal style guides to behind-the-scenes looks at our latest collections.',
      //       },
      // ];

      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            arrows: false,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                        },
                  },
                  {
                        breakpoint: 768,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
      };

      const next = () => {
            carouselRef.current.next();
      };

      const prev = () => {
            carouselRef.current.prev();
      };

      return (
            <div className="container">
                  <div className="space-y-5">
                        <h1 className="text-2xl text-title text-center italic">FurBabyz Drip Blog – Unleashing Style</h1>
                        <p className="text-text-secondary">
                              Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog
                              covers everything from seasonal style guides to behind-the-scenes looks at our latest collections.
                        </p>
                  </div>
                  <div className="flex justify-end">
                        <button>
                              <Link className="flex font-semibold items-center text-secondary/90 gap-2 " href={'/blogs'}>
                                    See More
                                    <MdArrowRightAlt size={24} />
                              </Link>
                        </button>
                  </div>
                  <div className="relative">
                        <Carousel {...settings} ref={carouselRef} className="product-carousel">
                              {blogs?.result?.slice(0, 10)?.map((blogs: TBlog) => (
                                    <BlogCard
                                          key={blogs._id}
                                          id={blogs._id}
                                          image={`${IMAGE_URL}/${blogs?.image}`}
                                          title={blogs?.title}
                                          date={blogs?.createdAt}
                                          description={blogs.des}
                                    />
                              ))}
                        </Carousel>
                        <CarouselNavigation key={'carousel'} next={next} prev={prev} />
                  </div>
            </div>
      );
};

export default BlogSection;
