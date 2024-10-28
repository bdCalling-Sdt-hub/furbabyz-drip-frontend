import ContactDetails from '@/components/pages/contact-us/ContactDetails';
import ContactForm from '@/components/pages/contact-us/ContactForm';
import PageHeader from '@/components/ui/shared/PageHeader';
import React from 'react';

const ContactUsPage = () => {
      return (
            <div className="container my-10">
                  <PageHeader />
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
                        <ContactDetails />
                        <div>
                              <ContactForm />
                        </div>
                  </div>
            </div>
      );
};

export default ContactUsPage;
