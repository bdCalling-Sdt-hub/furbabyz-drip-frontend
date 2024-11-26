'use client';

import React from 'react';
import { Input, Button, Form, notification } from 'antd';
import { useCreateContactMutation } from '@/redux/features/contact/contactApi';

const { TextArea } = Input;

const ContactForm = () => {
      const [createContact, { isLoading }] = useCreateContactMutation();
      const [form] = Form.useForm(); // Create form instance

      const onFinish = async (values: any) => {
            try {
                  const res = await createContact(values).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                        form.resetFields(); // Reset form after success
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };

      return (
            <div className="border p-6 w-full md:max-w-[550px] rounded-xl">
                  <Form
                        form={form} // Pass form instance to the Form component
                        name="contact"
                        layout="vertical"
                        onFinish={onFinish}
                  >
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
                              rules={[{ required: true, message: 'Please input your email!' }]}
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
                              <Button shape="round" type="primary" htmlType="submit" className="w-full rounded-full bg-[#31A2FF] py-2">
                                    {isLoading ? 'Sending...' : 'Send Message'}
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default ContactForm;
