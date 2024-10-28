'use client';
import { Button, Collapse, ConfigProvider } from 'antd';
import { CgChevronDown } from 'react-icons/cg';
import DogFoot from '@/assets/images/dogs/foot.png';
import Image from 'next/image';
import { MdArrowRightAlt } from 'react-icons/md';
const getItems = (panelStyle: any) => [
      {
            key: '1',
            label: <p className="text-lg text-[#414141] ">How do I know what size to order for my dog?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        To find the right size, measure your pet’s neck, chest, and back length. Refer to our size chart to choose the best
                        fit. If your pet is in between sizes, we recommend sizing up for comfort.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '2',
            label: <p className="text-lg text-[#414141] ">What is your return policy?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        We offer hassle-free returns within 30 days of purchase. If the clothing doesn’t fit or you’re not satisfied, simply
                        return it for a full refund or exchange.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '3',
            label: <p className="text-lg text-[#414141] ">How long does shipping take?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        Standard shipping typically takes 3-5 business days. We also offer expedited shipping options at checkout for faster
                        delivery.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '4',
            label: <p className="text-lg text-[#414141] ">Are your products made from eco-friendly materials?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        Yes, all of our pet clothing is made from sustainable, eco-friendly materials, ensuring your pet stays stylish while
                        supporting the environment.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '5',
            label: <p className="text-lg text-[#414141] ">Can I wash the clothing in a machine?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        Absolutely! All of our pet clothing is machine washable. Just follow the care instructions on the label for best
                        results.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '6',
            label: <p className="text-lg text-[#414141] ">How do I track my order?</p>,
            children: (
                  <p className="text-sm text-[#414141] ">
                        Once your order is shipped, you’ll receive a tracking number via email so you can monitor its delivery status.
                  </p>
            ),
            style: panelStyle,
      },
];

const FAQ = () => {
      const panelStyle = {
            marginBottom: 10,
            background: '#F3F3F3',
            borderRadius: '40px',
            border: 'none',
            padding: '4px',
            fontSize: '14px',
      };
      return (
            <div className="bg-[#f8f9fd]  py-20">
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
                                          items={getItems(panelStyle)}
                                          expandIconPosition="end"
                                          expandIcon={() => <CgChevronDown size={24} color="#414141" />}
                                          size="large"
                                    />
                              </ConfigProvider>
                              <div className="flex justify-center">
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
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FAQ;
