'use client';
import { Button, Form, Input, notification } from 'antd';
import React, { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import ProfileImageUploader from './ProfileImageUploader';
import { TUser, useUpdateUserProfileMutation } from '@/redux/features/user/userApi';

const MyProfile = ({ myProfile }: { myProfile: TUser }) => {
      const [updateProfile] = useUpdateUserProfileMutation();

      const [form] = Form.useForm();

      useEffect(() => {
            form.setFieldsValue({
                  name: myProfile?.name,
                  address: myProfile?.address,
                  postCode: myProfile?.postCode,
                  country: myProfile?.country,
            });
      }, [myProfile, form]);

      const onFinish = async (values: any) => {
            try {
                  const formData = new FormData();
                  formData.append('data', JSON.stringify(values));
                  console.log(values);
                  const res = await updateProfile(formData).unwrap();
                  console.log(res);

                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 order gap-6 my-6">
                  <div className="order-2 md:order-1">
                        <Form form={form} onFinish={onFinish} layout="vertical">
                              <Form.Item name="name" label={<p className="text-text-primary">Name</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="country" label={<p className="text-text-primary">Country/City</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="postCode" label={<p className="text-text-primary">Postal Code</p>} className="mb-4">
                                    <Input type="number" size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="address" label={<p className="text-text-primary">Address</p>} className="mb-4">
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
                        <ProfileImageUploader selectedProfile={myProfile} profileType="user" />
                  </div>
            </div>
      );
};

export default MyProfile;
