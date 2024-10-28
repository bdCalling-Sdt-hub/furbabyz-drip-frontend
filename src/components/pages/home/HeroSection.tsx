import { Button } from 'antd';
import Image from 'next/image';
import HeroDog from '@/assets/images/hero-section/hero-dog.png';
import { MdArrowRightAlt } from 'react-icons/md';

const HeroSection = () => {
      return (
            <section className="bg-[#252628] text-white py-10 md:py-0">
                  <div className="container min-h-[calc(100vh-80px)]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between ">
                        {/* Text Section */}
                        <div className="order-2 md:order-1 text-center md:text-left">
                              <h1 className="text-3xl   font-extrabold leading-10 md:text-5xl mb-4">
                                    UNLEASH
                                    <br />
                                    YOUR PET’S SWAG
                                    <br />
                                    WITH <span className="text-primary">FURBABYZ DRIP</span>
                              </h1>
                              <p className="  mb-6 w-full max-w-[70ch]">
                                    Culture-inspired fashion for dogs who drip style. dress your fur baby in the latest streetwear trends
                                    with bold, unique design crafted for comfort and swag.
                              </p>

                              {/* Buttons */}
                              <div className="flex flex-wrap gap-5 mt-5 md:gap-3 space-x-4 justify-center md:justify-start ">
                                    <Button
                                          href="/products"
                                          shape="round"
                                          style={{
                                                backgroundColor: '#31A2FF',
                                                height: 56,
                                          }}
                                          type="primary"
                                    >
                                          Shop the Collection
                                    </Button>

                                    <Button
                                          href="/accounts"
                                          iconPosition="end"
                                          icon={<MdArrowRightAlt size={24} />}
                                          shape="round"
                                          style={{
                                                height: 56,
                                                margin: 0,
                                                backgroundColor: 'transparent',
                                                border: '1px solid white',
                                                color: 'white',
                                          }}
                                          type="primary"
                                    >
                                          Create Your Pet Profile
                                    </Button>
                              </div>
                        </div>

                        {/* Image Section */}
                        <div className="order-1 md:order-2  flex justify-center relative">
                              <Image
                                    src={HeroDog}
                                    alt="Pets in fashion"
                                    width={675}
                                    height={500}
                                    className="object-contain w-full relative"
                              />
                        </div>
                  </div>
            </section>
      );
};

export default HeroSection;
