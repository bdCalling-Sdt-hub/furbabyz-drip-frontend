/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Visa from '@/assets/images/cart/visa.svg';
import American from '@/assets/images/cart/american.svg';
import Master from '@/assets/images/cart/master.svg';
import Paypal from '@/assets/images/cart/paypal.svg';

const CheckOutForms = ({ onFinish }: { onFinish: any }) => {
      return (
            <Form onFinish={onFinish} layout="vertical">
                  <div className="border text-text-primary p-4 rounded-xl">
                        {/* Card Number */}
                        <h3 className="text-lg   mb-4">Card Information</h3>
                        <Form.Item name="cardNumber" className="mb-4">
                              <Input
                                    placeholder="1256 1651 6485 6626"
                                    suffix={
                                          <div className="flex">
                                                <Image width={200} height={200} src={Paypal.src} alt="PayPal" className="w-full" />
                                                <Image width={200} height={200} src={Master.src} alt="PayPal" className="w-full" />
                                                <Image width={200} height={200} src={American.src} alt="PayPal" className="w-full" />
                                                <Image width={200} height={200} src={Visa.src} alt="PayPal" className="w-full" />
                                          </div>
                                    }
                              />
                        </Form.Item>

                        {/* Expiry Date and CVC */}
                        <div className="grid grid-cols-2 gap-4">
                              <Form.Item name="expiryDate" className="mb-4">
                                    <Input placeholder="MM / YY" size="large" />
                              </Form.Item>
                              <Form.Item name="cvc" className="mb-4">
                                    <Input placeholder="CVC" size="large" suffix={<CreditCardOutlined />} />
                              </Form.Item>
                        </div>

                        {/* Card Holder Name */}
                        <Form.Item name="cardHolderName" label={<p className="text-text-primary">Card Holder Name</p>} className="mb-4">
                              <Input placeholder="Card Holder-name" size="large" />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item name="email" label={<p className="text-text-primary">Email</p>} className="mb-4">
                              <Input placeholder="Email" size="large" />
                        </Form.Item>

                        {/* Country / Region */}
                        <Form.Item name="countryRegion" label={<p className="text-text-primary">Country/Region</p>} className="mb-4">
                              <Input placeholder="Country/Region" size="large" />
                        </Form.Item>
                  </div>

                  {/* Shipping Address Section */}
                  <div className="p-4 border mt-6 border-gray-300 rounded-lg">
                        <h3 className="text-lg text-text-primary mb-4">Shipping Address</h3>
                        <Form.Item name="shippingAddress">
                              <Input.TextArea placeholder="Shipping Address" rows={4} />
                        </Form.Item>
                  </div>
            </Form>
      );
};

export default CheckOutForms;
