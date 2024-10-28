import Image from 'next/image';
import React from 'react';
import RegisterImage from '@/assets/images/auth/register.png';
import RegisterForm from '@/components/pages/auth/register/RegisterForm';

const RegisterPage = () => {
      return (
            <div className="flex items-center md:container min-h-[calc(100vh-80px)]">
                  <div className="w-full m-auto my-10 bg-white md:p-12 md:rounded-[34.47px] grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                              <RegisterForm />
                        </div>
                        <div className="flex justify-center items-center">
                              <Image className="m-auto md:w-[454px]" src={RegisterImage.src} height={1000} width={1000} alt="img" />
                        </div>
                  </div>
            </div>
      );
};

export default RegisterPage;
