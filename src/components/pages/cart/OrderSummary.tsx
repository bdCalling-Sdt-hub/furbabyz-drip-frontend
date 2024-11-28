import { Button } from 'antd';
import { OrderItem } from './OrderItem';
import { useAppSelector } from '@/redux/hooks';

import { useState } from 'react';

export const OrderSummary = () => {
      const { items, subtotal, totalAmount } = useAppSelector((state) => state.cart);

      return (
            <div className="border rounded-lg p-6 max-w-xl mx-auto">
                  <h2 className="text-lg font-medium text-text-primary mb-4">Order Summary</h2>
                  <div className="space-y-4">
                        {items?.map((product, index) => (
                              <OrderItem
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    id={product.id}
                                    image={product.image}
                                    quantity={product.quantity}
                              />
                        ))}
                  </div>

                  {/* Summary Section */}
                  <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                              <p className="font-medium text-text-secondary">Subtotal</p>
                              <p className="font-medium text-title">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2 py-3 border-t border-gray-200">
                              <p className="text-md font-medium text-text-secondary">Total Amount</p>
                              <p className="text-md font-medium text-title">${totalAmount.toFixed(2)}</p>
                        </div>

                        {/* Coupon Code Input Section */}
                        {/* <div className="flex justify-between items-center mt-4">
                              <Input
                                    className="w-full"
                                    placeholder="Enter Discount Code (if any)"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    style={{ height: 42, backgroundColor: '#F5F5F5', border: 'none' }}
                              />
                              <Button
                                    type="primary"
                                    className="ml-3"
                                    onClick={handleApplyCoupon}
                                    style={{ backgroundColor: '#31A2FF', color: 'white' }}
                              >
                                    Apply
                              </Button>
                        </div> */}

                        {/* Optionally display coupon applied status */}
                        {/* {couponApplied && (
                              <div className="mt-4 text-green-500">
                                    <p>Coupon Applied: {couponCode}</p>
                              </div>
                        )} */}
                  </div>

                  {/* Checkout Button */}
                  <div className="mt-6">
                        <Button type="primary" className="w-full rounded-full bg-[#31A2FF] py-1">
                              Checkout
                        </Button>
                  </div>
            </div>
      );
};
