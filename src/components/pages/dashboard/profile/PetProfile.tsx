'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import ProfileImageUploader from './ProfileImageUploader';

const PetProfile = () => {
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
                              <Form.Item name="breed" label={<p className="text-text-primary">Breed</p>} className="mb-4">
                                    <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <Form.Item name="preference" label={<p className="text-text-primary">Preference</p>} className="mb-4">
                                    <Input size="large" placeholder="Bold/Classic/Playful " suffix={<FiEdit color="#B5B5B5" />} />
                              </Form.Item>
                              <div className="grid grid-cols-2 gap-5">
                                    <Form.Item name="weight" label={<p className="text-text-primary">Weight</p>} className="mb-4">
                                          <Input type="number" size="large" placeholder="Enter in ibs" />
                                    </Form.Item>
                                    <Form.Item name="neckLength" label={<p className="text-text-primary">Neck Length</p>} className="mb-4">
                                          <Input type="number" size="large" placeholder="Enter in ibs" />
                                    </Form.Item>
                              </div>
                              <div className="grid grid-cols-2 gap-5">
                                    <Form.Item
                                          name="collarToTailLength"
                                          label={<p className="text-text-primary">Collar to Tail length</p>}
                                          className="mb-4"
                                    >
                                          <Input type="number" size="large" placeholder="Enter in ibs" />
                                    </Form.Item>
                                    <Form.Item
                                          name="chestLength"
                                          label={<p className="text-text-primary">Chest length</p>}
                                          className="mb-4"
                                    >
                                          <Input type="number" size="large" placeholder="Enter in ibs" />
                                    </Form.Item>
                              </div>

                              <Form.Item className="mb-4">
                                    <Button type="primary" htmlType="submit">
                                          Save & Change
                                    </Button>
                              </Form.Item>
                              <Button
                              className='w-full'
                                    style={{
                                          backgroundColor: '#302830',
                                          height: 40,
                                          padding: '0px 40px',
                                    }}
                                    type="primary"
                                    htmlType="submit"
                              >
                                 <span className='truncate'>  Go to Recommended Products</span>
                              </Button>
                        </Form>
                  </div>
                  <div className="order-1 md:order-2">


                  <ProfileImageUploader />
                  </div>
            </div>
      );
};

export default PetProfile;
