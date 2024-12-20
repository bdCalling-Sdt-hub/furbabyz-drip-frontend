'use client';
import React from 'react';
import { Input, Button, Form, notification } from 'antd';
import { IoMailOutline, IoMapOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useCreateUserMutation } from '@/redux/features/user/userApi';
import { BsPhone } from 'react-icons/bs';

const RegisterForm = () => {
      const [createUser] = useCreateUserMutation();
      const router = useRouter();
      const onFinish = async (values: any) => {
            try {
                  const formData = new FormData();
                  formData.append('data', JSON.stringify(values));

                  const res = await createUser(formData).unwrap();

                  if (res?.success) {
                        notification.success({
                              message: res?.message,
                        });
                        localStorage.setItem('verifyEmail', values.email);
                        router.push('/verify-otp?purpose=register');
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Internal server error!',
                  });
            }
      };

      return (
            <div className="flex items-center justify-center h-full">
                  <div className="border w-full md:max-w-[590px] p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-3">Create Account</h2>
                        <p className="text-start text-text-primary">Create Account!</p>
                        <p className="text-start mb-3 text-text-secondary">Please fill the information to create account.</p>

                        <Form name="register" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Username</p>
                                    <Form.Item name="name" rules={[{ required: true, message: 'Please enter your username' }]}>
                                          <Input style={{ height: 48 }} suffix={<AiOutlineUser />} />
                                    </Form.Item>
                              </div>

                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Email</p>
                                    <Form.Item
                                          name="email"
                                          rules={[
                                                { required: true, message: 'Please enter your email address' },
                                                { type: 'email', message: 'Please enter a valid email address' },
                                          ]}
                                    >
                                          <Input style={{ height: 48 }} suffix={<IoMailOutline />} />
                                    </Form.Item>
                              </div>

                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Phone Number</p>
                                    <Form.Item name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                                          <Input style={{ height: 48 }} suffix={<BsPhone />} />
                                    </Form.Item>
                              </div>

                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Address</p>
                                    <Form.Item name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
                                          <Input style={{ height: 48 }} suffix={<IoMapOutline />} />
                                    </Form.Item>
                              </div>

                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Create Password</p>
                                    <Form.Item
                                          name="password"
                                          rules={[
                                                { required: true, message: 'Please enter your password' },
                                                { min: 8, message: 'Password must be at least 8 characters' },
                                          ]}
                                          hasFeedback
                                    >
                                          <Input.Password style={{ height: 48 }} />
                                    </Form.Item>
                              </div>

                              <div className="mb-1">
                                    <p className="text-text-primary my-2">Confirm Password</p>
                                    <Form.Item
                                          name="confirmPassword"
                                          dependencies={['password']}
                                          hasFeedback
                                          rules={[
                                                { required: true, message: 'Please confirm your password' },
                                                ({ getFieldValue }) => ({
                                                      validator(_, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                  return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('Passwords do not match!'));
                                                      },
                                                }),
                                          ]}
                                    >
                                          <Input.Password style={{ height: 48 }} />
                                    </Form.Item>
                              </div>

                              <Form.Item>
                                    <Button
                                          shape="round"
                                          style={{ height: 48, backgroundColor: '#58A6FF', width: '100%' }}
                                          type="primary"
                                          htmlType="submit"
                                          size="large"
                                    >
                                          Create Account
                                    </Button>
                              </Form.Item>

                              <p className="text-center text-gray-600">
                                    Already have an account?
                                    <Link href="/login" className="text-primary ms-1">
                                          Log in
                                    </Link>
                              </p>
                        </Form>
                  </div>
            </div>
      );
};

export default RegisterForm;
