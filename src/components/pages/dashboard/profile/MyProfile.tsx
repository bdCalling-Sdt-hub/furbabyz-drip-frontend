'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import ProfileImageUploader from './ProfileImageUploader';

const MyProfile = () => {
      const onFinish = (values: FormData) => {
            console.log('Form Values:', values);
            // TODO: Save user details to the database
      };
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 order gap-6 my-6">
                  <div className="order-2 md:order-1">
                        <Form onFinish={onFinish} layout="vertical">
                              <Form.Item name="name" label={<p className="text-text-primary">Name</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="country" label={<p className="text-text-primary">Country/City</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="postalCode" label={<p className="text-text-primary">Postal Code</p>} className="mb-4">
                                    <Input type="number" size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="Address" label={<p className="text-text-primary">Address</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item className="mb-4">
                                    <Button type="primary" htmlType="submit">
                                          Save & Change
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
                  <div className="order-1 md:order-2">
                 <ProfileImageUploader />
                 </div>
            </div>
      );
};

export default MyProfile;
