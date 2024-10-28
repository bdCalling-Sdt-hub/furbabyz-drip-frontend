'use client';
import { Collapse, ConfigProvider } from 'antd';
import { CgChevronDown } from 'react-icons/cg';

const getItems = (panelStyle: any) => [
      {
            key: '1',
            label: <p className="text-lg text-[#414141]">What does Fur Babyz Drip actually do?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        Fur Babyz Drip provides fashionable and functional clothing for pets, ensuring that your furry friend stays both
                        stylish and comfortable.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '2',
            label: <p className="text-lg text-[#414141]">What does Fur Babyz Drip sell?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        Fur Babyz Drip sells high-quality pet clothing and accessories tailored for different sizes and breeds to keep pets
                        both fashionable and comfortable.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '3',
            label: <p className="text-lg text-[#414141]">What solution do Fur Babyz Drip provides?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        Fur Babyz Drip offers stylish, comfortable, and durable clothing options for pets, ensuring that they stay protected
                        and cozy in various weather conditions.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '4',
            label: <p className="text-lg text-[#414141]">Does Fur Babyz Drip ensure quality products?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        Yes, Fur Babyz Drip ensures that all its products are made from high-quality, durable materials that provide comfort
                        for your pet while lasting a long time.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '5',
            label: <p className="text-lg text-[#414141]">How do I know what size to order for my dog?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        To find the right size, measure your dog’s neck, chest, and back length. Refer to the Fur Babyz Drip size chart to
                        choose the best fit.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '6',
            label: <p className="text-lg text-[#414141]">What is your return policy?</p>,
            children: (
                  <p className="text-sm text-[#414141]">
                        Fur Babyz Drip offers free returns within 30 days of purchase. Products must be unused and in original packaging.
                  </p>
            ),
            style: panelStyle,
      },
      {
            key: '7',
            label: <p className="text-lg text-[#414141]">How long does shipping take?</p>,
            children: <p className="text-sm text-[#414141]">Standard shipping takes 7-10 business days.</p>,
            style: panelStyle,
      },
];

const FAQPageSection = () => {
      const panelStyle = {
            marginBottom: 15,
            background: '#F3F3F3',
            borderRadius: '40px',
            border: 'none',
            padding: '4px',
            fontSize: '14px',
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
