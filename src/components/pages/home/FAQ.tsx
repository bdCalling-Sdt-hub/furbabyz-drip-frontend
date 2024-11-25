'use client';
import { Button, Collapse, ConfigProvider } from 'antd';
import { CgChevronDown } from 'react-icons/cg';
import DogFoot from '@/assets/images/dogs/foot.png';
import Image from 'next/image';

import { useGetFaqsQuery } from '@/redux/features/faq/faqApi';

const FAQ = () => {
      const { data: faqs } = useGetFaqsQuery([]); // Get FAQ data from API

      const panelStyle = {
            marginBottom: 10,
            background: '#F3F3F3',
            borderRadius: '40px',
            border: 'none',
            padding: '4px',
            fontSize: '14px',
      };

      // Ensure the faqs data is available before rendering the component
      const getItems = (panelStyle: any) => {
            return faqs?.map((faq: any) => ({
                  key: faq._id, // Using the unique _id as the key
                  label: <p className="text-lg text-[#414141] ">{faq.question}</p>,
                  children: <p className="text-sm text-[#414141] ">{faq.answer}</p>,
                  style: panelStyle,
            }));
      };

      return (
            <div className="bg-[#f8f9fd] py-20">
                  <div className="container relative">
                        <Image className="absolute" src={DogFoot.src} alt="dog" width={100} height={100} />
                        <Image className="absolute right-0 rotate-45 bottom-0" src={DogFoot.src} alt="dog" width={100} height={100} />
                        <div className="w-full md:max-w-[898px] space-y-6 mx-auto">
                              <h2 className="text-xl md:text-4xl font-me text-center text-secondary">Frequently Asked Questions</h2>

                              <p className="text-center">
                                    Have questions about buying pet clothing? Check out our FAQs below to get the answers you need about
                                    sizing, returns, and shipping.
                              </p>
                              <ConfigProvider
                                    theme={{
                                          components: {
                                                Collapse: {
                                                      fontFamily: 'CustomFont, sans-serif',
                                                },
                                          },
                                    }}
                              >
                                    <Collapse
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          bordered={false}
                                          items={getItems(panelStyle)} // Use dynamic FAQs data
                                          expandIconPosition="end"
                                          expandIcon={() => <CgChevronDown size={24} color="#414141" />}
                                          size="large"
                                    />
                              </ConfigProvider>
                              {/* <div className="flex justify-center">
                                    <Button
                                          iconPosition="end"
                                          icon={<MdArrowRightAlt size={24} />}
                                          shape="round"
                                          style={{
                                                height: 56,
                                                margin: 0,
                                                backgroundColor: 'transparent',
                                                border: '1px solid #584857',
                                                color: '#584857',
                                          }}
                                          type="primary"
                                    >
                                          Create Your Pet Profile
                                    </Button>
                              </div> */}
                        </div>
                  </div>
            </div>
      );
};

export default FAQ;
