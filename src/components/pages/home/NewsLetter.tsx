import React from 'react';
import { Input, Button } from 'antd';
import NewsLetterImage from '@/assets/images/others/news-letter.png';
import Image from 'next/image';
const NewsLetter = () => {
      return (
            <div className="container py-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center border rounded-[32px] p-8 w-full mx-auto">
                        <div className="">
                              <Image
                                    width={360}
                                    height={240}
                                    src={NewsLetterImage.src}
                                    alt="Newsletter Illustration"
                                    className="object-cover ms-auto "
                              />
                        </div>

                        <div className="">
                              <h3 className="text-lg font-semibold text-secondary mb-2">Join the FurBabyz Squad Newsletter</h3>
                              <p className="text-text-primary mb-4">
                                    Subscribe to our newsletter for exclusive offers, early access to new collections, and more!
                              </p>

                              {/* Input and Button */}
                              <div className="flex flex-wrap gap-2 items-center">
                                    <div className="w-full md:w-[300px]">
                                          <Input
                                                className="w-full"
                                                placeholder="Your email"
                                                style={{ height: 56, width: '100%', backgroundColor: '#F5F5F5', border: 'none' }}
                                          />
                                    </div>
                                    <div className="w-full md:w-[120px]">
                                          <Button
                                                style={{
                                                      width: '100%',
                                                }}
                                                type="primary"
                                                className="w-full sm:w-auto bg-blue-500 text-white rounded-full px-6 py-2"
                                          >
                                                Subscribe
                                          </Button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NewsLetter;
