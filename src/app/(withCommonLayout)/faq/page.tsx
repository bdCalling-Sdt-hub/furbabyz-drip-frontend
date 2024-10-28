import FAQPageSection from '@/components/pages/faq/FAQPageSection';

import PageHeader from '@/components/ui/shared/PageHeader';
import Image from 'next/image';
import React from 'react';
import FAQImage from '@/assets/images/faq/faq.png';

const FaqPage = () => {
      return (
            <div className="container">
                  <PageHeader />
                  <h1 className="text-xl md:text-3xl text-center md:text-start text-secondary font-medium my-2">Frequently Asked Questions</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                        <FAQPageSection />
                        <Image className="w-full object-cover" src={FAQImage.src} alt="faq" width={1000} height={1000} />
                  </div>
            </div>
      );
};

export default FaqPage;
