'use client';
import React from 'react';
import { Input, Button, Form, ConfigProvider, notification } from 'antd';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyEmailMutation } from '@/redux/features/auth/authApi';

const OtpVerifyForm = () => {
      const [verifyEmail] = useVerifyEmailMutation();
      const router = useRouter();
      const searchParams = useSearchParams();
      const purpose = searchParams.get('purpose');
      const onFinish = async (values: any) => {
            try {
                  const body = {
                        oneTimeCode: Number(values.oneTimeOtp),
                        email: localStorage.getItem('verifyEmail'),
                  };
                  const res = await verifyEmail(body).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res?.message,
                        });
                        localStorage.removeItem('verifyEmail');
                        localStorage.setItem('oneTimeToken', res.data);

                        if (purpose === 'reset-password') {
                              router.push('/set-password');
                        } else {
                              router.push('/login');
                        }
                  }
            } catch (error: any) {
                  notification.error({
                        message: 'Verify Failed',
                        description: error?.data?.message || 'Something went wrong. Please try again.',
                        duration: 3,
                  });
            }
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
                                                name="oneTimeOtp"
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
