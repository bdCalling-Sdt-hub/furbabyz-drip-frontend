'use client';
import React, { ReactNode } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

import dynamic from 'next/dynamic';
const Providers = ({ children }: { children: ReactNode }) => {
      const ReduxProvider = dynamic(() => import('@/redux/lib/ReduxProvider'), {
            ssr: false,
      });
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
                        <ReduxProvider>{children}</ReduxProvider>
                  </ConfigProvider>
            </AntdRegistry>
      );
};

export default Providers;
