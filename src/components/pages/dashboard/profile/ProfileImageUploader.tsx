'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, notification } from 'antd';
import { TPetProfile } from './PetProfile';
import { IMAGE_URL } from '@/redux/base/baseApi';
import { useUpdatePetProfileMutation } from '@/redux/features/profile/profileApi';

const ProfileImageUploader: React.FC<{ selectedProfile: TPetProfile | null }> = ({ selectedProfile }) => {
      const [updatePetProfile] = useUpdatePetProfileMutation();
      const fileInputRef = useRef<HTMLInputElement | null>(null);

      const handleButtonClick = () => {
            fileInputRef.current?.click();
      };

      const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  const formData = new FormData();
                  formData.append('image', file);
                  try {
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
                        console.error('Error uploading profile image:', error);
                  }
            }
      };

      return (
            <div className="border p-8 my-8 space-y-4 flex flex-col items-center">
                  {/* Profile Image Preview */}
                  <div className="w-full md:w-[248px] md:h-[248px] rounded-xl overflow-hidden shadow-md mx-auto">
                        <Image
                              alt="profile"
                              src={`${IMAGE_URL}/${selectedProfile?.image}`}
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                        />
                  </div>

                  {/* Change Profile Picture Button */}
                  <Button style={{ width: '100%' }} type="primary" onClick={handleButtonClick}>
                        Change Profile Picture
                  </Button>

                  {/* Hidden File Input */}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
      );
};

export default ProfileImageUploader;
