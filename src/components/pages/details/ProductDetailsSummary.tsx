'use client';

import React, { useState } from 'react';
import { Button, Select, Input } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai';
import { TProduct } from '@/redux/features/product/productApi';

const { Option } = Select;

const ProductDetailsSummary = ({ product }: { product: TProduct }) => {
      const [unit, setUnit] = useState('cm');
      const [activeCategory, setActiveCategory] = useState('New Arrivals');
      const categories = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];

      return (
            <div className="border p-8 rounded-xl">
                  {/* Title and Price Section */}
                  <div className="flex justify-between items-start">
                        <div>
                              <h1 className="text-2xl text-[#2E2E2E] font-semibold">{product?.name}</h1>
                              <p className="text-2xl text-title font-medium mt-1">${product?.price}</p>
                        </div>
                        <button>
                              <AiOutlineHeart size={30} />
                        </button>
                  </div>

                  {/* Features Section */}
                  <div className="mt-2">
                        <h2 className="font-medium text-title text-lg">Features</h2>
                        <ul className="list-disc pl-5 text-text-secondary mt-2">
                              <li>Machine Washable.</li>
                              <li>Adjustable fit with elastic waistband.</li>
                              <li>Designed for style and comfort.</li>
                        </ul>
                  </div>

                  {/* Size Selection Section */}
                  <div className="mt-4 flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                              <button
                                    key={index}
                                    onClick={() => setActiveCategory(category)}
                                    className={`flex justify-between items-center py-2 px-4 rounded-lg ${
                                          activeCategory === category
                                                ? 'bg-blue-500 text-white border border-transparent'
                                                : 'border border-gray-400 text-gray-700'
                                    }`}
                              >
                                    {category}
                              </button>
                        ))}
                  </div>

                  {/* Unit Toggle Section */}
                  <div className="mt-6 flex items-center justify-end space-x-2">
                        <div className="flex items-center justify-center space-x-1 bg-[#F9F9F9] p-1 rounded-full w-32 ">
                              <button
                                    onClick={() => setUnit('inch')}
                                    className={`flex-1 py-2 rounded-full transition-all duration-200 ${
                                          unit === 'inch' ? 'bg-[#31A2FF] text-white' : 'bg-transparent text-black'
                                    }`}
                              >
                                    inc
                              </button>
                              <button
                                    onClick={() => setUnit('cm')}
                                    className={`flex-1 py-2 rounded-full transition-all duration-200 ${
                                          unit === 'cm' ? 'bg-[#31A2FF] text-white' : 'bg-transparent text-black'
                                    }`}
                              >
                                    cm
                              </button>
                        </div>
                  </div>

                  {/* Measurements Section */}
                  <div className="mt-6">
                        <h2 className="font-medium text-title text-lg">Measurements</h2>
                        <div className=" space-y-5 my-5">
                              <div className="grid grid-cols-2 gap-5 items-center">
                                    <Input
                                          style={{
                                                backgroundColor: '#FBFBFB',
                                                height: 40,
                                          }}
                                          variant="borderless"
                                          type="number"
                                          className=""
                                          placeholder="Enter neck length/size"
                                          size="large"
                                    />
                                    <Input
                                          style={{
                                                backgroundColor: '#FBFBFB',
                                                height: 40,
                                          }}
                                          variant="borderless"
                                          type="number"
                                          className=""
                                          placeholder="Enter chest length/size"
                                          size="large"
                                    />
                              </div>
                              <div>
                                    <Input
                                          style={{
                                                backgroundColor: '#FBFBFB',
                                                height: 40,
                                          }}
                                          variant="borderless"
                                          type="number"
                                          className=""
                                          placeholder="Enter length from Collar to Tail"
                                          size="large"
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDetailsSummary;
