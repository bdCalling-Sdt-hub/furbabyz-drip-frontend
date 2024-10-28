import Navbar from '@/components/layout/Navbar';
import { ConfigProvider } from 'antd';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
      return (
            <div>
                  <Navbar />
                  <div className="authBg">
                        <ConfigProvider
                              theme={{
                                    components: {
                                          Input: {
                                                colorBgContainer: '#F3F3F3',
                                                fontSizeIcon: 50,
                                                colorIcon: '#737373',
                                          },
                                    },
                              }}
                        >
                              {children}
                        </ConfigProvider>
                  </div>
            </div>
      );
}
