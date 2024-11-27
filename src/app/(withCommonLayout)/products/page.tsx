'use client';

import CategoryBar from '@/components/pages/products/CategoryBar';
import FilterSection from '@/components/pages/products/FilterSection';
import PageHeader from '@/components/ui/shared/PageHeader';
import { IMAGE_URL } from '@/redux/base/baseApi';
import { useGetFilterProductsQuery } from '@/redux/features/product/productApi';
import { useAppSelector } from '@/redux/hooks';
import { Pagination } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsSuitHeartFill } from 'react-icons/bs';
import { RxStarFilled } from 'react-icons/rx';

const ProductsPage = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const { category, productType, size, color, gender, search } = useAppSelector((state) => state.filter);

      const { data: productData } = useGetFilterProductsQuery([
            { name: 'category', value: category },
            { name: productType, value: (productType == 'newProduct' && true) || (productType == 'bestSellingProduct' && 5) },
            { name: 'size', value: size },
            { name: 'color', value: color },
            { name: 'gender', value: gender },
            { name: 'searchTerm', value: search },
            { name: 'page', value: currentPage },
            { name: 'limit', value: 9 },
      ]);
      const handlePageChange = (page: number) => {
            setCurrentPage(page); // Update the current page state
      };
      return (
            <div className="container mb-20">
                  <PageHeader
                        title="Shop FurBabyz Drip"
                        subtitle="From graffiti print hoodies to gold-chain dog collars, FurBabyz Drip brings you the freshest styles for your
                  pet. Each piece is designed with comfort and attitude in mind, so your dog can look great and feel even
                  better. Browse our collections below and find the perfect fit for your fur baby’s next adventure."
                  />

                  <CategoryBar />

                  <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-3">
                              <FilterSection />
                        </div>

                        <div className="col-span-12 md:col-span-9 min-h-screen">
                              {productData?.data && productData?.data.length > 0 ? (
                                    <>
                                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                                {productData?.data.map((product) => (
                                                      <div key={product._id} className="px-2">
                                                            <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                                                                  <Image
                                                                        src={`${IMAGE_URL}/${product?.image[0]}`}
                                                                        alt={product?.name}
                                                                        width={300}
                                                                        height={300}
                                                                        className="object-cover w-full h-[266px] mx-auto"
                                                                  />
                                                                  <Link
                                                                        href={`/products/${product._id}`}
                                                                        className="p-4 h-full text-center"
                                                                  >
                                                                        <h2 className="text-lg text-title font-semibold">
                                                                              {product?.name}
                                                                        </h2>
                                                                        <div className="flex items-center justify-center text-yellow-500 mb-2">
                                                                              <RxStarFilled size={16} />
                                                                              <span className="ml-2 text-[12px]">
                                                                                    {product?.rating ? product.rating : 0} / 5
                                                                              </span>
                                                                              <span className="ml-2 text-gray-500">({product?.count})</span>
                                                                        </div>

                                                                        <p className="text-xl font-medium">$ {product?.price}</p>
                                                                  </Link>
                                                                  <BsSuitHeartFill className="absolute top-6 right-6 text-gray-500 text-2xl hover:text-[#ff5252]" />
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>

                                          <div className="my-5 flex justify-end">
                                                <Pagination
                                                      current={currentPage} // The current page
                                                      onChange={handlePageChange} // Update current page
                                                      total={productData?.meta?.total} // Total number of items
                                                      pageSize={productData?.meta?.limit} // Items per page
                                                      showQuickJumper // Allow jumping to specific page numbers
                                                      responsive
                                                />
                                          </div>
                                    </>
                              ) : (
                                    <div className="flex flex-col justify-center items-center text-center py-10 px-6 rounded-lg  my-10 animate-fadeIn">
                                          <AiOutlineSearch size={50} className="text-gray-500 mb-4" />
                                          <h2 className="text-3xl font-semibold text-gray-800">No Products Found</h2>
                                          <p className="text-gray-600 mt-4 text-lg">
                                                We couldn&apos;t find any products matching your criteria. Please adjust your filters or try
                                                again later.
                                          </p>
                                          <div className="mt-6 text-gray-500 text-sm">
                                                <p>
                                                      Need help?
                                                      <Link href="/contact-us" className="text-blue-500 ms-2 hover:underline">
                                                            Contact us
                                                      </Link>{' '}
                                                      for assistance.
                                                </p>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default ProductsPage;
