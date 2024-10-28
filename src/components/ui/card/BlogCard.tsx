'use client';
import Image from 'next/image';
import { Button } from 'antd';
import Link from 'next/link';

interface BlogCardProps {
      image: string;
      title: string;
      date: string;
      description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, description }) => {
      return (
            <div className="px-2 my-6">
                  <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                        <Image src={image} alt={title} width={500} height={300} className="object-contain w-full mx-auto" />
                        <div className="p-4 h-full space-y-3">
                              <h2 className="text-lg text-title font-semibold">{title}</h2>
                              <p className="text-text-primary">{date}</p>
                              <p className="text-text-primary">{description}</p>
                              <Link className="my-5" href={'/blogs'}>
                                    <Button
                                          style={{ width: '100%' }}
                                          type="primary"
                                          className="w-full sm:w-auto bg-[#31A2FF] text-white rounded-full px-6 py-1 my-3"
                                    >
                                          Learn More
                                    </Button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default BlogCard;
