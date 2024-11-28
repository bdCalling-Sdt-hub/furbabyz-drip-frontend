'use client';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { Button, Form, Input, notification } from 'antd';
import React from 'react';
import { FiEdit } from 'react-icons/fi';

const SettingsPage = () => {
      const [form] = Form.useForm();
      const [changePassword] = useChangePasswordMutation();

      const onFinish = async (values: any) => {
            try {
                  const res = await changePassword(values).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                        // Reset the form fields after success
                        form.resetFields();
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any)?.data?.message || 'An error occurred',
                  });
            }
      };

      return (
            <div>
                  <h2 className="text-xl font-medium text-title mb-4">Settings</h2>
                  <hr />

                  <div className="grid grid-cols-1 md:grid-cols-2 my-10 md:max-w-3xl">
                        <h2 className="text-xl font-medium text-title mb-4">Change Password</h2>
                        <div>
                              <Form form={form} onFinish={onFinish} layout="vertical">
                                    <Form.Item
                                          name="currentPassword"
                                          label={<p className="text-text-primary">Old Password</p>}
                                          className="mb-4"
                                          rules={[{ required: true, message: 'Please input your old password!' }]}
                                    >
                                          <Input.Password size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item
                                          name="newPassword"
                                          label={<p className="text-text-primary">New Password</p>}
                                          className="mb-4"
                                          rules={[{ required: true, message: 'Please input your new password!' }]}
                                    >
                                          <Input.Password size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item
                                          name="confirmPassword"
                                          label={<p className="text-text-primary">Confirm Password</p>}
                                          className="mb-4"
                                          dependencies={['newPassword']}
                                          rules={[
                                                { required: true, message: 'Please confirm your password!' },
                                                ({ getFieldValue }) => ({
                                                      validator(_, value) {
                                                            if (!value || getFieldValue('newPassword') === value) {
                                                                  return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The two passwords do not match!'));
                                                      },
                                                }),
                                          ]}
                                    >
                                          <Input.Password size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>

                                    <Form.Item className="mb-4">
                                          <Button type="primary" htmlType="submit">
                                                Save & Change
                                          </Button>
                                    </Form.Item>
                              </Form>
                        </div>
                  </div>
            </div>
      );
};

export default SettingsPage;
