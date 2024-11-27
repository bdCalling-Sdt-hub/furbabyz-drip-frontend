'use client';

import { Button } from 'antd';
import React from 'react';

const PaymentOptions = () => {
      return (
            <div className=" flex flex-col gap-4 my-6 mx-auto p-6 text-center">
                  <Button
                        shape="round"
                        style={{
                              backgroundColor: '#000000',
                              width: '100%',
                              height: 56,
                              color: '#FFFFFF',
                              fontSize: 18,
                        }}
                        type="primary"
                  >
                        Add to Cart
                  </Button>
                  {/* <Button
                        shape="round"
                        style={{
                              backgroundColor: '#635BFF',
                              width: '100%',
                              height: 56,
                              color: '#FFFFFF',
                              fontSize: 18,
                        }}
                        type="primary"
                  >
                        Buy now with Stripe
                  </Button> */}

                  {/* <p className="mt-4 text-title text-sm font-medium underline">Select other payment method</p> */}
            </div>
      );
};

export default PaymentOptions;
