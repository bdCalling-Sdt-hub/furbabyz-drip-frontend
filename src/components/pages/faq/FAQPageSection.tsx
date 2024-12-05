'use client';
import { useGetFaqsQuery } from '@/redux/features/faq/faqApi';
import { Collapse, ConfigProvider } from 'antd';
import { CgChevronDown } from 'react-icons/cg';

const FAQPageSection = () => {
      const { data: faqs } = useGetFaqsQuery([]);

      const panelStyle = {
            marginBottom: 15,
            background: '#F3F3F3',
            borderRadius: '40px',
            border: 'none',
            padding: '4px',
            fontSize: '14px',
      };
      const getItems = (panelStyle: any) => {
            return faqs?.result?.map((faq: any) => ({
                  key: faq._id, // Using the unique _id as the key
                  label: <p className="text-lg text-[#414141] ">{faq.question}</p>,
                  children: <p className="text-sm text-[#414141] ">{faq.answer}</p>,
                  style: panelStyle,
            }));
      };
      return (
            <div className="my-10">
                  <div className="">
                        <div className="w-full">
                              <ConfigProvider
                                    theme={{
                                          components: {
                                                Collapse: {
                                                      fontFamily: 'Inter, sans-serif',
                                                },
                                          },
                                    }}
                              >
                                    <Collapse
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          bordered={false}
                                          items={getItems(panelStyle)}
                                          expandIconPosition="end"
                                          expandIcon={() => <CgChevronDown size={24} color="#414141" />}
                                          size="large"
                                    />
                              </ConfigProvider>
                        </div>
                  </div>
            </div>
      );
};

export default FAQPageSection;
