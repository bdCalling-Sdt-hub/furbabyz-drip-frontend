'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import clsx from 'clsx'; // Import clsx

type TProps = {
      title?: string;
      subtitle?: string;
      className?: string;
};

const PageHeader = ({ title, subtitle, className }: TProps) => {
      const router = useRouter();
      const handleBackClick = () => {
            router.back();
      };

      return (
            <header className={clsx('my-2 text-start', className)}>
                  <div className="space-y-4">
                        <div className="">
                              <button className="cursor-pointer flex items-center space-x-4" onClick={handleBackClick}>
                                    <div className="bg-[#F3F9F5] rounded-full p-2 flex items-center justify-center">
                                          <LiaLongArrowAltLeftSolid size={20} />
                                    </div>
                                    <p className="text-black font-medium">Back</p>
                              </button>
                        </div>

                        <h1 className="text-xl text-title">{title}</h1>
                        <p className="text-text-primary">{subtitle}</p>
                  </div>
            </header>
      );
};

export default PageHeader;
