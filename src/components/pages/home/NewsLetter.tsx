'use client';
import React, { SetStateAction, useState } from 'react';
import { Input, Button, notification } from 'antd';
import NewsLetterImage from '@/assets/images/others/news-letter.png';
import Image from 'next/image';
import { useSubscribeMutation } from '@/redux/features/newsletter/newsletterApi';
const NewsLetter = () => {
      const [email, setEmail] = useState<SetStateAction<null | string>>(null);
      const [error, setError] = useState('');
      const [subscribe] = useSubscribeMutation();

      const handleSubscribe = async () => {
            if (!email) {
                  setError('Please enter your email');
                  return;
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email as string)) {
                  setError('Please enter a valid email address');
                  return;
            }

            try {
                  const res = await subscribe(email).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };

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
                                                onChange={(e) => setEmail(e.target.value as string)}
                                                className="w-full"
                                                placeholder="Your email"
                                                style={{ height: 56, width: '100%', backgroundColor: '#F5F5F5', border: 'none' }}
                                          />
                                    </div>
                                    <div className="w-full md:w-[120px]">
                                          <Button
                                                onClick={handleSubscribe}
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
                              <div>{error && <p className="text-red-500 duration-200 mt-2">{error}</p>}</div>
                        </div>
                  </div>
            </div>
      );
};

export default NewsLetter;
