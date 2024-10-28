import Image from 'next/image';
import React from 'react';
import ForgotImage from '@/assets/images/auth/verify.png';
import SetPasswordForm from '@/components/pages/auth/set-password/SetPasswordForm';

const SetPassword = () => {
      return (
            <div className="flex items-center my-10 md:my-0 md:container min-h-[calc(100vh-80px)]">
                  <div className="w-full m-auto bg-white md:p-12 md:rounded-[34.47px] grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                              <SetPasswordForm />
                        </div>
                        <div className="flex justify-center items-center">
                              <Image className="m-auto md:w-[454px]" src={ForgotImage.src} height={1000} width={1000} alt="img" />
                        </div>
                  </div>
            </div>
      );
};

export default SetPassword;
