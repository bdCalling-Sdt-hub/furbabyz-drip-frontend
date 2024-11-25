'use client';
import React from 'react';
import { Input, Button, Checkbox, Form, notification } from 'antd';
import { IoMailOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLoginUserMutation } from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hooks';
import { setAccessToken } from '../../../../utils/authUtils';
import { setUser } from '@/redux/features/auth/authSlice';
import { decodedUser } from '@/utils/decodedUser';

const LoginForm = () => {
      const router = useRouter();
      const [loginUser] = useLoginUserMutation();
      const dispatch = useAppDispatch();
      const onFinish = async (values: FormData) => {
            try {
                  const res = await loginUser(values).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                        const user = decodedUser(res.data.accessToken);
                        setAccessToken(res.data.accessToken);
                        dispatch(
                              setUser({
                                    user,
                                    token: res.data.accessToken,
                              })
                        );
                        router.push('/');
                  }
            } catch (error: any) {
                  notification.error({
                        message: error?.data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };
      return (
            <div className="flex items-center justify-center h-full">
                  <div className="border w-full md:max-w-[500px] p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-3">Sign-In</h2>
                        <p className="text-start text-text-primary">Welcome Back!</p>
                        <p className="text-start mb-3 text-text-secondary">Please sign into your account below</p>

                        <Form name="signin" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
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

                              <div className="mb-2">
                                    <p className="text-text-primary my-2">Password</p>
                                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                                          <Input.Password
                                                style={{
                                                      height: 48,
                                                }}
                                                styles={{
                                                      suffix: {
                                                            fontSize: 18,
                                                      },
                                                }}
                                          />
                                    </Form.Item>
                              </div>

                              <div className="flex items-center justify-between mb-6">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                          <Checkbox className="text-gray-600">Remember me</Checkbox>
                                    </Form.Item>
                                    <Link href="/forgot-password" className="text-[#FF725C] text-sm">
                                          Forgot Password?
                                    </Link>
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
                                          Sign in
                                    </Button>
                              </Form.Item>

                              {/* <Form.Item>
                                    <Button
                                          icon={<FcGoogle size={24} />}
                                          shape="round"
                                          style={{
                                                height: 48,
                                                backgroundColor: '#FFFBF5',
                                                width: '100%',
                                                color: '#737373',
                                          }}
                                          type="primary"
                                          htmlType="submit"
                                          size="large"
                                    >
                                          Continue with Google
                                    </Button>
                              </Form.Item> */}

                              <p className="text-center text-gray-600">
                                    Don’t have an Account?{' '}
                                    <Link href="/register" className="text-primary">
                                          Create Account
                                    </Link>
                              </p>
                        </Form>
                  </div>
            </div>
      );
};

export default LoginForm;
