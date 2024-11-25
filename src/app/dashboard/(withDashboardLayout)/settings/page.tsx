'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { FiEdit } from 'react-icons/fi';

const SettingsPage = () => {
      const onFinish = (values: FormData) => {
            console.log('Received values of form:', values);
      };
      return (
            <div>
                  <h2 className="text-xl font-medium text-title mb-4">Settings</h2>
                  <hr />

                  <div className="grid grid-cols-1 md:grid-cols-2 my-10 md:max-w-3xl ">
                        <h2 className="text-xl font-medium text-title mb-4">Change Password</h2>
                        <div>
                              <Form onFinish={onFinish} layout="vertical">
                                    <Form.Item
                                          name="oldPassword"
                                          label={<p className="text-text-primary">Old Password</p>}
                                          className="mb-4"
                                    >
                                          <Input.Password size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item
                                          name="newPassword"
                                          label={<p className="text-text-primary">New Password</p>}
                                          className="mb-4"
                                    >
                                          <Input.Password size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item
                                          name="confirmPassword"
                                          label={<p className="text-text-primary">Confirm Password</p>}
                                          className="mb-4"
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
