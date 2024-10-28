'use client';
import React from 'react';
import { Input, Button, Form, ConfigProvider } from 'antd';
import { useRouter } from 'next/navigation';

const SetPasswordForm = () => {
      const router = useRouter();
      const onFinish = (values: FormData) => {
            console.log('Form Values:', values);
            router.push('/');
      };
      return (
            <div className="flex items-center justify-center h-full">
                  <div className="border w-full md:max-w-[500px] p-8 rounded-xl">
                        <h2 className="text-2xl font-semibold text-center mb-3">Set a new password</h2>

                        <p className="text-start mb-3 text-text-secondary">
                              Create a new password. Ensure it differs from previous ones for security
                        </p>

                        <Form name="forgot" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
                              <div className="mb-2">
                                    <ConfigProvider
                                          theme={{
                                                components: {
                                                      Input: {},
                                                },
                                          }}
                                    >
                                          <div className="mb-1">
                                                <p className="text-text-primary my-2">Create Password</p>
                                                <Form.Item
                                                      name="password"
                                                      rules={[
                                                            { required: true, message: 'Please enter your password' },
                                                            { min: 6, message: 'Password must be at least 6 characters' },
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
                                          Submit
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
            </div>
      );
};

export default SetPasswordForm;
