'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import DefaultProfileImage from '@/assets/images/dashboard/profile.png';

const ProfileImageUploader: React.FC = () => {
      const fileInputRef = useRef<HTMLInputElement | null>(null);
      const [profileImage, setProfileImage] = useState<string>(DefaultProfileImage.src);

      const handleButtonClick = () => {
            fileInputRef.current?.click();
      };

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setProfileImage(imageUrl);
            }
      };

      const handleRemoveImage = () => {
            setProfileImage(DefaultProfileImage.src);
            if (fileInputRef.current) {
                  fileInputRef.current.value = ''; // Clear the file input
            }
      };

      return (
            <div className="border p-8 my-8 space-y-4 flex flex-col items-center">
                  {/* Profile Image Preview */}
                  <div className="w-full md:w-[248px] md:h-[248px] rounded-xl overflow-hidden shadow-md mx-auto">
                        <Image alt="profile" src={profileImage} width={400} height={400} className="w-full h-full object-cover" />
                  </div>

                  {/* Change Profile Picture Button */}
                  <Button style={{ width: '100%' }} type="primary" onClick={handleButtonClick}>
                        Change Profile Picture
                  </Button>

                  {/* Remove Profile Picture Button */}
                  <Button
                        style={{
                              backgroundColor: 'transparent',
                              border: '1px solid red',
                              color: 'red',
                              height: 40,
                              fontWeight: 400,
                              width: '100%',
                        }}
                        onClick={handleRemoveImage}
                  >
                        Remove Profile Picture
                  </Button>

                  {/* Hidden File Input */}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
            </div>
      );
};

export default ProfileImageUploader;
