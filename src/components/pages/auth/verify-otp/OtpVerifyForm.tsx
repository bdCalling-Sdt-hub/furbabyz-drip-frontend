'use client';
import React from 'react';
import { Input, Button, Form, ConfigProvider } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const OtpVerifyForm = () => {
      const router = useRouter();
      const onFinish = (values: FormData) => {
            console.log('Form Values:', values);
            router.push('/set-password');
      };
      return (
            <div className="flex items-center justify-center h-full">
                  <div className="border w-full md:max-w-[500px] p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-3">Verification Process</h2>

                        <p className="text-start mb-3 text-text-secondary">Fill in the information below to proceed on word.</p>

                        <Form name="forgot" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
                              <div className="mb-2">
                                    <p className="text-text-primary my-2">OTP Code</p>
                                    <ConfigProvider
                                          theme={{
                                                components: {
                                                      Input: {},
                                                },
                                          }}
                                    >
                                          <Form.Item
                                                name="email"
                                                rules={[{ required: true, message: 'Please enter your 6 digit otp here' }]}
                                          >
                                                <Input.OTP
                                                      size="large"
                                                      length={6}
                                                      style={{
                                                            height: 48,
                                                      }}
                                                />
                                          </Form.Item>
                                    </ConfigProvider>
                              </div>

                              <Form.Item>
                                    <Button
                                          shape="round"
                                          style={{
                                                height: 48,
                                                backgroundColor: '#58A6FF',
                                                width: '100%',
                                          }}
                                          type="primary"
                                          htmlType="submit"
                                          size="large"
                                    >
                                          Verify
                                    </Button>
                              </Form.Item>
                              <div className="mb-3">
                                    <p className="text-center text-gray-600 ">
                                          Didn’t get the Code?
                                          <button className="text-primary ms-1">Resend code again</button>
                                    </p>
                              </div>
                              <div>
                                    <p className="text-center text-gray-600">
                                          Need help?
                                          <Link href="/contact-us" className="text-[#FF725C] ms-1">
                                                Contact us
                                          </Link>
                                    </p>
                              </div>
                        </Form>
                  </div>
            </div>
      );
};

export default OtpVerifyForm;
