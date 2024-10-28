'use client';

import React from 'react';
import { Input, Button, Form, FormProps } from 'antd';

const { TextArea } = Input;
type FieldType = {
      name?: string;
      email?: string;
      message?: string;
};

const ContactForm = () => {
      const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
            console.log('Success:', values);
      };

      return (
            <div className="border p-6 w-full md:max-w-[550px] rounded-xl">
                  <Form name="contact" layout="vertical" onFinish={onFinish}>
                        <Form.Item
                              label={<p className="text-[#737373]">Name</p>}
                              name="name"
                              rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                              <Input
                                    style={{
                                          height: 56,
                                          borderRadius: 16,
                                    }}
                              />
                        </Form.Item>
                        <Form.Item
                              label={<p className="text-[#737373]">Email</p>}
                              name="email"
                              rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                              <Input
                                    type="email"
                                    style={{
                                          height: 56,
                                          borderRadius: 16,
                                    }}
                              />
                        </Form.Item>

                        {/* Message Input */}
                        <Form.Item
                              label={<p className="text-[#737373]">Message</p>}
                              name="message"
                              rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                              <TextArea
                                    style={{
                                          borderRadius: 16,
                                    }}
                                    rows={4}
                              />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                              <Button shape="round" type="primary" htmlType="submit" className="w-full rounded-full bg-[#31A2FF]  py-2">
                                    Send Message
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default ContactForm;
