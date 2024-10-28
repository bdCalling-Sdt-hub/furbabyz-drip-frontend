import AboutBanner from '@/components/pages/about/AboutBanner';
import BlogSection from '@/components/pages/about/BlogSection';
import WhyChooseUs from '@/components/pages/about/WhyChooseUs';
import NewsLetter from '@/components/pages/home/NewsLetter';
import PageHeader from '@/components/ui/shared/PageHeader';
import React from 'react';

const AboutPage = () => {
      return (
            <div>
                  <div className="container">
                        <PageHeader />
                  </div>
                  <AboutBanner />
                  <WhyChooseUs />
                  <BlogSection />
                  <NewsLetter />
            </div>
      );
};

export default AboutPage;
