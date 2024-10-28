import FAQ from '@/components/pages/home/FAQ';
import HeroSection from '@/components/pages/home/HeroSection';
import LandingPetProfile from '@/components/pages/home/LandingPetProfile';
import LimitedEdition from '@/components/pages/home/LimitedEdition';
import NewDrip from '@/components/pages/home/NewDrip';
import NewsLetter from '@/components/pages/home/NewsLetter';
import React from 'react';

const HomePage = () => {
      return (
            <div>
                  <HeroSection />
                  <NewDrip />
                  <LimitedEdition />
                  <LandingPetProfile />
                  <FAQ />
                  <NewsLetter />
            </div>
      );
};

export default HomePage;
