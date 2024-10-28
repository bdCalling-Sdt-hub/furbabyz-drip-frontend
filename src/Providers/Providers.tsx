import React, { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
const Providers = ({ children }: { children: ReactNode }) => {
      return (
            <AntdRegistry>
                  <ConfigProvider
                        theme={{
                              token: {
                                    colorPrimary: '#31A2FF',
                                    fontFamily: 'CustomFont, sans-serif',
                                    fontSize: 16,
                              },
                              components: {
                                    Button: {
                                          lineWidth: 20,
                                    },
                                    Pagination: {
                                          colorPrimary: '#D9D9D9',
                                          itemActiveBg: '#584857',
                                          colorPrimaryHover: 'white',
                                    },
                                    Form: {
                                          marginLG: 14,
                                    },
                              },
                        }}
                  >
                        {children}
                  </ConfigProvider>
            </AntdRegistry>
      );
};

export default Providers;
