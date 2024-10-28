import CategoryBar from '@/components/pages/products/CategoryBar';
import FilterSection from '@/components/pages/products/FilterSection';
import PageHeader from '@/components/ui/shared/PageHeader';
import { products } from '@/const/const';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { RxStarFilled } from 'react-icons/rx';
const ProductsPage = () => {
      return (
            <div className="container mb-20">
                  <PageHeader
                        title="Shop FurBabyz Drip"
                        subtitle=" From graffiti print hoodies to gold-chain dog collars, FurBabyz Drip brings you the freshest styles for your
                              pet. Each piece is designed with comfort and attitude in mind, so your dog can look great and feel even
                              better. Browse our collections below and find the perfect fit for your fur baby’s next adventure."
                  />

                  <CategoryBar />

                  <div className="grid grid-cols-12 gap-4 ">
                        <div className="col-span-12 md:col-span-3">
                              <FilterSection />
                        </div>
                        <div className="col-span-12 md:col-span-9 min-h-screen">
                              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                    {products.map((product) => (
                                          <div key={product.id} className="px-2">
                                                <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                                                      <Image
                                                            src={product.image}
                                                            alt={product.title}
                                                            width={300}
                                                            height={300}
                                                            className="object-contain mx-auto"
                                                      />
                                                      <Link href={`/products/${1}`} className="p-4 h-full text-center">
                                                            <h2 className="text-lg text-title font-semibold">{product.title}</h2>
                                                            <div className="flex items-center justify-center text-yellow-500 mb-2">
                                                                  <RxStarFilled size={16} />{' '}
                                                                  <span className="ml-2 text-[12px]">{product.rating}</span>
                                                                  <span className="ml-2 text-gray-500">({product.reviews})</span>
                                                            </div>
                                                            <p className="text-xl font-medium">{product.price}</p>
                                                      </Link>
                                                            <BsSuitHeartFill className="absolute top-6 right-6 text-gray-500 text-2xl hover:text-[#ff5252]" />
                                                            
                                                            
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              <div className="my-5">
                                    <Pagination align="center" defaultCurrent={1} total={50} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductsPage;
