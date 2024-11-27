'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MyProfile from '@/components/pages/dashboard/profile/MyProfile';
import PetProfile from '@/components/pages/dashboard/profile/PetProfile';
import { useMyProfileQuery } from '@/redux/features/user/userApi';

import { getImageUrl } from '@/utils/getImageUrl';

const AccountsPage = () => {
      const [activeTab, setActiveTab] = useState('myProfile');
      const { data: myProfile } = useMyProfileQuery([]);

      return (
            <div>
                  <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                              <Image
                                    className="size-[40px] rounded-full"
                                    alt="profile.png"
                                    src={getImageUrl(myProfile?.image)}
                                    width={400}
                                    height={400}
                              />
                              <h1 className="text-title text-xs  md:text-xl">Hello {myProfile?.name} !</h1>
                        </div>
                        <div className="flex items-center justify-center space-x-1 bg-[#F9F9F9] p-1 rounded-full w-52 ">
                              <button
                                    onClick={() => setActiveTab('myProfile')}
                                    className={`flex-1 py-1 md:py-2 text-xs md:text-sm rounded-full transition-all duration-200 ${
                                          activeTab === 'myProfile' ? 'bg-[#31A2FF] text-white' : 'bg-transparent text-black'
                                    }`}
                              >
                                    My Profile
                              </button>
                              <button
                                    onClick={() => setActiveTab('petProfile')}
                                    className={`flex-1 py-1 md:py-2 text-xs md:text-sm rounded-full transition-all duration-200 ${
                                          activeTab === 'petProfile' ? 'bg-[#31A2FF] text-white' : 'bg-transparent text-black'
                                    }`}
                              >
                                    Pet Profile
                              </button>
                        </div>
                  </div>
                  {activeTab === 'myProfile' ? <MyProfile myProfile={myProfile} /> : <PetProfile />}
            </div>
      );
};

export default AccountsPage;
