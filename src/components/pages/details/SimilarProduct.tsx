import { products } from '@/const/const';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiHeartLine } from 'react-icons/ri';
import { RxStarFilled } from 'react-icons/rx';

const SimilarProduct = () => {
      return (
            <div className="my-10">
                  <h1 className="text-2xl text-title font-medium text-center my-4">Similar Product</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {products.map((product) => (
                              <div key={product.id} className="">
                                    <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                                          <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={300}
                                                className="object-contain mx-auto"
                                          />
                                          <Link href={`/products/${1}`}>
                                                <div className="p-4 h-full text-center">
                                                      <h2 className="text-lg text-title font-medium truncate">{product.title}</h2>
                                                      <div className="flex items-center justify-center text-yellow-500 mb-2">
                                                            <RxStarFilled size={16} />{' '}
                                                            <span className="ml-2 text-[12px]">{product.rating}</span>
                                                            <span className="ml-2 text-gray-500">({product.reviews})</span>
                                                      </div>
                                                      <p className="text-xl text-title font-medium">{product.price}</p>
                                                </div>
                                          </Link>
                                          <RiHeartLine
                                                color="#D69CA5"
                                                className="absolute top-6 right-6 text-black text-2xl hover:text-[#D69CA5]"
                                          />
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default SimilarProduct;
