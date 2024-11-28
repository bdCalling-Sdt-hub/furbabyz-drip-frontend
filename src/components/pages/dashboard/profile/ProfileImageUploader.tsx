'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, notification } from 'antd';
import { TPetProfile } from './PetProfile';

import { useUpdatePetProfileMutation } from '@/redux/features/profile/profileApi';
import { TUser, useUpdateUserProfileMutation } from '@/redux/features/user/userApi';
import { getImageUrl } from '@/utils/getImageUrl';

interface ProfileImageUploaderProps {
      selectedProfile: TPetProfile | TUser;
      profileType: 'pet' | 'user';
}

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({ selectedProfile, profileType }) => {
      const fileInputRef = useRef<HTMLInputElement | null>(null);

      const [updatePetProfile] = useUpdatePetProfileMutation();
      const [updateUserProfile] = useUpdateUserProfileMutation();

      const handleButtonClick = () => {
            fileInputRef.current?.click();
      };

      const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  const formData = new FormData();
                  formData.append('image', file);

                  try {
                        let res;
                        if (profileType === 'pet' && selectedProfile) {
                              res = await updatePetProfile({
                                    id: selectedProfile._id,
                                    data: formData,
                              }).unwrap();
                        } else if (profileType === 'user') {
                              res = await updateUserProfile(formData).unwrap();
                        }

                        if (res?.success) {
                              notification.success({
                                    message: res?.message || 'Profile image updated successfully!',
                              });
                        }
                  } catch (error) {
                        console.error('Error uploading profile image:', error);
                        notification.error({
                              message: (error as any).data?.message || 'Something went wrong. Please try again.',
                        });
                  }
            }
      };

      return (
            <div className="border p-8 my-8 space-y-4 flex flex-col items-center">
                  {/* Profile Image Preview */}
                  <div className="w-full md:w-[248px] md:h-[248px] rounded-xl overflow-hidden shadow-md mx-auto">
                        <Image
                              alt="profile"
                              src={getImageUrl(selectedProfile?.image)}
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
