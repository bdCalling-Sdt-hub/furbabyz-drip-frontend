'use client';
import React from 'react';
import { Input, Button, Checkbox, Form, ConfigProvider } from 'antd';
import { IoMailOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {
      const router = useRouter();
      const onFinish = (values: FormData) => {
            console.log('Form Values:', values);
            router.push('/verify-otp');
      };
      return (
            <div className="flex items-center justify-center h-full">
                  <div className="border w-full md:max-w-[500px] p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-3">Forgot Password</h2>

                        <p className="text-start mb-3 text-text-secondary">Fill in the information below to proceed on word.</p>

                        <Form name="forgot" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
                              <div className="mb-2">
                                    <p className="text-text-primary my-2">Email Address</p>
                                    <Form.Item
                                          name="email"
                                          rules={[
                                                { required: true, message: 'Please enter your email address' },
                                                { type: 'email', message: 'Please enter a valid email address' },
                                          ]}
                                    >
                                          <Input
                                                style={{
                                                      height: 48,
                                                }}
                                                styles={{
                                                      suffix: {
                                                            fontSize: 18,
                                                      },
                                                }}
                                                suffix={<IoMailOutline />}
                                          />
                                    </Form.Item>
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
                                          Send email
                                    </Button>
                              </Form.Item>
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

export default ForgotPasswordForm;
