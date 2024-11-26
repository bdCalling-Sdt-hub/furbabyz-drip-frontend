'use client';
import Image from 'next/image';
import { Button } from 'antd';
import moment from 'moment';

interface BlogCardProps {
      id: string;
      image: string;
      title: string;
      date: string;
      description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, date, description }) => {
      return (
            <div className="px-2 my-6">
                  <div className="product-card bg-[#FBFBFB] relative rounded-lg overflow-hidden flex flex-col h-full min-h-[500px]">
                        <Image src={image} alt={title} width={500} height={300} className="object-cover w-full h-[282px] mx-auto" />
                        <div className="p-4 flex flex-col justify-between h-full space-y-3">
                              <div className="flex-grow h-full space-y-4">
                                    <h2 className="text-lg text-title font-semibold">{title}</h2>
                                    <p className="text-text-primary">{moment(date).fromNow()}</p>
                                    <p className="text-text-primary line-clamp-3">{description}</p>
                              </div>
                              {/* Ensures button stays at the bottom */}
                              <Button
                                    href={`/blogs?id=${id}`}
                                    style={{ width: '100%' }}
                                    type="primary"
                                    className="w-full sm:w-auto bg-[#31A2FF] text-white rounded-full px-6 py-1 my-3 mt-auto"
                              >
                                    Learn More
                              </Button>
                        </div>
                  </div>
            </div>
      );
};

export default BlogCard;
