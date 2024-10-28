import React from 'react';
import { BsDot } from 'react-icons/bs';

const ContactDetails = () => {
      return (
            <div className="space-y-6">
                  <h1 className="font-medium text-xl md:text-3xl text-center md:text-start  text-secondary ">Contact Us </h1>
                  <p className="text-text-secondary">
                        From graffiti print hoodies to gold-chain dog collars, FurBabyz Drip brings you the freshest styles for your pet.
                        Each piece is designed with comfort and attitude in mind, so your dog can look great and feel even better. Browse
                        our collections below and find the perfect fit for your fur baby’s next adventure.
                  </p>
                  <h3 className="flex items-center gap-2 font-medium text-secondary text-xl">
                        <BsDot size={24} />
                        Email Address : support@furbabyzdrip.com
                  </h3>
            </div>
      );
};

export default ContactDetails;
