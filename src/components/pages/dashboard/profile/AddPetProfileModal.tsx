import { useCreatePetProfileMutation } from '@/redux/features/profile/profileApi';
import { Button, Form, Input, notification, Upload } from 'antd';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { PlusOutlined } from '@ant-design/icons';
const AddPetProfileModal = ({ setOpenModal }: { setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
      const [createPetProfile] = useCreatePetProfileMutation();
      const [fileList, setFileList] = useState([]);

      // Handle image upload
      const handleChange = ({ fileList: newFileList }: any) => setFileList(newFileList);

      // Preview the image

      const onFinish = async (values: any) => {
            const obj = { ...values };
            const image = obj.image.file;

            delete obj.image;

            try {
                  const formData = new FormData();
                  formData.append('image', image);
                  formData.append('data', JSON.stringify(values));
                  const res = await createPetProfile(formData).unwrap();
                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                  }
                  setOpenModal(false);
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };

      return (
            <Form requiredMark={false} onFinish={onFinish} layout="vertical">
                  <Form.Item
                        name={'image'}
                        rules={[{ required: true, message: 'Please upload an image' }]}
                        label="Upload Pet Image"
                        className="mb-4"
                  >
                        <Upload listType="picture-card" fileList={fileList} onChange={handleChange} beforeUpload={() => false}>
                              {fileList.length >= 1 ? null : (
                                    <div>
                                          <PlusOutlined />
                                          <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>
                              )}
                        </Upload>
                  </Form.Item>

                  {/* Form Fields */}
                  <Form.Item
                        name="name"
                        label={<p className="text-text-primary">Name</p>}
                        className="mb-4"
                        rules={[{ required: true, message: 'Please enter the name' }]}
                  >
                        <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                  </Form.Item>
                  <Form.Item
                        name="breed"
                        label={<p className="text-text-primary">Breed</p>}
                        className="mb-4"
                        rules={[{ required: true, message: 'Please enter the breed' }]}
                  >
                        <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                  </Form.Item>
                  <Form.Item
                        name="preference"
                        label={<p className="text-text-primary">Preference</p>}
                        className="mb-4"
                        rules={[{ required: true, message: 'Please enter the preference' }]}
                  >
                        <Input size="large" placeholder="Bold/Classic/Playful" suffix={<FiEdit color="#B5B5B5" />} />
                  </Form.Item>
                  <div className="grid grid-cols-2 gap-5">
                        <Form.Item
                              name="weight"
                              label={<p className="text-text-primary">Weight</p>}
                              className="mb-4"
                              rules={[{ required: true, message: 'Please enter the weight' }]}
                        >
                              <Input type="number" size="large" placeholder="Enter in lbs" />
                        </Form.Item>
                        <Form.Item
                              name="neck"
                              label={<p className="text-text-primary">Neck Length</p>}
                              className="mb-4"
                              rules={[{ required: true, message: 'Please enter the neck length' }]}
                        >
                              <Input type="number" size="large" placeholder="Enter in inches" />
                        </Form.Item>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                        <Form.Item
                              name="coller"
                              label={<p className="text-text-primary">Collar to Tail Length</p>}
                              className="mb-4"
                              rules={[{ required: true, message: 'Please enter the collar-to-tail length' }]}
                        >
                              <Input type="number" size="large" placeholder="Enter in inches" />
                        </Form.Item>
                        <Form.Item
                              name="chest"
                              label={<p className="text-text-primary">Chest Length</p>}
                              className="mb-4"
                              rules={[{ required: true, message: 'Please enter the chest length' }]}
                        >
                              <Input type="number" size="large" placeholder="Enter in inches" />
                        </Form.Item>
                  </div>
                  <Form.Item className="mb-4">
                        <Button type="primary" htmlType="submit">
                              Save & Change
                        </Button>
                  </Form.Item>
            </Form>
      );
};

export default AddPetProfileModal;
