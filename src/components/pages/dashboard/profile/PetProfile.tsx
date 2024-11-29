'use client';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, notification, Select } from 'antd';
import { FiEdit } from 'react-icons/fi';
import ProfileImageUploader from './ProfileImageUploader';
import Modal from '@/components/ui/Modal';
import AddPetProfileModal from './AddPetProfileModal';
import { useGetPetProfileQuery, useUpdatePetProfileMutation } from '@/redux/features/profile/profileApi';

export type TPetProfile = {
      _id: string;
      name: string;
      user: User;
      breed: string;
      preference: string;
      weight: string;
      neck: string;
      status: string;
      coller: string;
      chest: string;
      image: string;
      createdAt: string;
      updatedAt: string;
};

export interface User {
      _id: string;
      name: string;
}

const PetProfile = () => {
      const { data: petProfiles = [] } = useGetPetProfileQuery([]);
      const [updatePetProfile] = useUpdatePetProfileMutation();
      const [selectedProfile, setSelectedProfile] = useState<TPetProfile | null>(null);
      const [form] = Form.useForm();
      const [openModal, setOpenModal] = useState<boolean>(false);

      const handleProfileSelect = (value: string) => {
            const profile = petProfiles.find((profile: TPetProfile) => profile._id === value);
            setSelectedProfile(profile || null);
            if (profile) {
                  form.setFieldsValue({
                        name: profile.name,
                        breed: profile.breed,
                        preference: profile.preference,
                        weight: profile.weight,
                        neckLength: profile.neck,
                        collarToTailLength: profile.coller,
                        chestLength: profile.chest,
                  });
            }
      };

      useEffect(() => {
            if (petProfiles.length > 0) {
                  const firstProfile = petProfiles[0];
                  setSelectedProfile(firstProfile);
                  form.setFieldsValue({
                        name: firstProfile.name,
                        breed: firstProfile.breed,
                        preference: firstProfile.preference,
                        weight: firstProfile.weight,
                        neck: firstProfile.neck,
                        coller: firstProfile.coller,
                        chest: firstProfile.chest,
                  });
            }
      }, [petProfiles, form]);

      const onFinish = async (values: any) => {
            console.log('Form Values:', values, selectedProfile?._id);
            try {
                  const formData = new FormData();
                  formData.append('data', JSON.stringify(values));
                  const res = await updatePetProfile({
                        id: selectedProfile?._id,
                        data: formData,
                  }).unwrap();

                  if (res?.success) {
                        notification.success({
                              message: res?.message,
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
                  {/* Left: Form Section */}
                  <div className="order-2 md:order-1">
                        {petProfiles.length > 0 && (
                              <Form form={form} onFinish={onFinish} layout="vertical">
                                    <Form.Item name="name" label={<p className="text-text-primary">Name</p>} className="mb-4">
                                          <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item name="breed" label={<p className="text-text-primary">Breed</p>} className="mb-4">
                                          <Input size="large" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <Form.Item name="preference" label={<p className="text-text-primary">Preference</p>} className="mb-4">
                                          <Input size="large" placeholder="Bold/Classic/Playful" suffix={<FiEdit color="#B5B5B5" />} />
                                    </Form.Item>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item name="weight" label={<p className="text-text-primary">Weight</p>} className="mb-4">
                                                <Input type="number" size="large" placeholder="Enter in lbs" />
                                          </Form.Item>
                                          <Form.Item name="neck" label={<p className="text-text-primary">Neck Length</p>} className="mb-4">
                                                <Input type="number" size="large" placeholder="Enter in inches" />
                                          </Form.Item>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                          <Form.Item
                                                name="coller"
                                                label={<p className="text-text-primary">Collar to Tail Length</p>}
                                                className="mb-4"
                                          >
                                                <Input type="number" size="large" placeholder="Enter in inches" />
                                          </Form.Item>
                                          <Form.Item
                                                name="chest"
                                                label={<p className="text-text-primary">Chest Length</p>}
                                                className="mb-4"
                                          >
                                                <Input type="number" size="large" placeholder="Enter in inches" />
                                          </Form.Item>
                                    </div>
                                    <Form.Item className="mb-4">
                                          <Button type="primary" htmlType="submit">
                                                Save & Change
                                          </Button>
                                    </Form.Item>
                                    {/* <Button
                                    className="w-full"
                                    style={{
                                          backgroundColor: '#302830',
                                          height: 40,
                                          padding: '0px 40px',
                                    }}
                                    type="primary"
                              >
                                    <span className="truncate">Go to Recommended Products</span>
                              </Button> */}
                              </Form>
                        )}
                  </div>

                  {/* Right: Profile Image and Dropdown */}
                  <div className="order-1 md:order-2">
                        {
                              <div className="mb-5 flex items-center justify-end">
                                    {petProfiles.length > 0 && (
                                          <Select
                                                defaultValue={petProfiles[0]?._id}
                                                style={{ width: '200px', height: 42 }}
                                                placeholder="Select Pet Profile"
                                                onChange={handleProfileSelect}
                                          >
                                                {petProfiles.map((profile: TPetProfile) => (
                                                      <Select.Option key={profile._id} value={profile._id}>
                                                            {profile.name}
                                                      </Select.Option>
                                                ))}
                                          </Select>
                                    )}
                                    <button
                                          onClick={() => setOpenModal(true)}
                                          className="ml-2 bg-[#F7F7F7] text-xl text-black px-4 py-2 rounded-md"
                                    >
                                          +
                                    </button>
                              </div>
                        }

                        {/* Profile Image Uploader */}
                        {petProfiles.length > 0 && <ProfileImageUploader selectedProfile={selectedProfile!} profileType="pet" />}
                  </div>

                  {/* Modal for Adding New Profile */}
                  <Modal
                        width={600}
                        body={<AddPetProfileModal setOpenModal={setOpenModal} />}
                        title="Add Pet Profile"
                        open={openModal}
                        setOpen={setOpenModal}
                  />
            </div>
      );
};

export default PetProfile;
