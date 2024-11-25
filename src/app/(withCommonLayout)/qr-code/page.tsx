import PageHeader from '@/components/ui/shared/PageHeader';
import QR from '@/assets/images/others/qr.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';

const QRCodePage = () => {
      return (
            <div className="container my-5">
                  <PageHeader />
                  <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                              <h1 className="text-xl md:text-3xl text-center md:text-start text-secondary font-medium my-4">
                                    Exclusive FurBabyz Drip Deals for West Coast Grooming Clients!
                              </h1>
                              <p className="text-text-secondary text-center md:text-start">
                                    Welcome to the exclusive collection for West Coast Grooming Academy customers. We’ve curated a special
                                    line of culture-inspired dog fashion just for you. Shop today and enjoy 15% off your first order when
                                    you use the <span className="font-bold text-title">Code : GROOMSWAG</span> at checkout.
                              </p>
                              <div className="space-y-4 mt-5">
                                    <h1 className="text-xl text-title font-semibold">Exclusive Offers :</h1>
                                    <p>• 15% off on all hoodies and tees.</p>
                                    <p>• Free shipping on orders over $50.</p>
                                    <br />
                                    <Link className="my-5" href="/cart">
                                          <Button
                                                style={{
                                                      backgroundColor: '#FF4F5B',
                                                      height: 48,
                                                      borderRadius: 10,
                                                      padding: '6px 50px',
                                                }}
                                                type="primary"
                                          >
                                                Get Exclusive Deal
                                          </Button>
                                    </Link>
                              </div>
                        </div>
                        <div>
                              <Image src={QR.src} alt="QR Code" height={500} width={500} />
                        </div>
                  </div>
            </div>
      );
};

export default QRCodePage;
