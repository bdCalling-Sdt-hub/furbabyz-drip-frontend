'use client';
import PageHeader from '@/components/ui/shared/PageHeader';
import Image from 'next/image';
import React from 'react';

import { TBlog, useGetBlogsQuery } from '@/redux/features/blog/blogApi';
import { IMAGE_URL } from '@/redux/base/baseApi';
import { useSearchParams } from 'next/navigation';

const BlogsPage = () => {
      const { data: blogs } = useGetBlogsQuery([]);
      const id = useSearchParams().get('id');

      return (
            <div className="container mb-4">
                  <PageHeader
                        title="FurBabyz Drip Blog – Unleashing Style"
                        subtitle="Stay updated with the latest trends in pet fashion, grooming tips, and exclusive FurBabyz Drip news. Our blog
                              covers everything from seasonal style guides to behind-the-scenes looks at our latest collections."
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3 my-10 ">
                        {blogs?.result?.map((blog: TBlog, index: number) => {
                              return (
                                    <div
                                          key={index}
                                          className={`bg-[#F9F9F9] w-full ${id == blog._id ? 'bg-[#f9f6f4]' : ''}   mx-auto rounded-xl`}
                                    >
                                          {/* Image and Avatar */}
                                          <div className="m-5 rounded-t-xl h-[370px]">
                                                <div className="w-[261px] h-[369px] mx-auto flex items-center">
                                                      <Image
                                                            className="w-full h-full mx-auto  object-cover"
                                                            src={`${IMAGE_URL}/${blog.image}`}
                                                            alt="Dog Avatar"
                                                            width={1000}
                                                            height={1000}
                                                      />
                                                </div>
                                          </div>

                                          {/* Blog Content */}
                                          <div className="px-6 py-4 text-text-secondary">
                                                <h2 className="text-xl text-title font-semibold">{blog?.title}</h2>
                                                <p className="mt-2">{blog?.des}</p>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default BlogsPage;
