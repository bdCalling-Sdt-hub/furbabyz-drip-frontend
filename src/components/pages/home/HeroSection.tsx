'use client';
import Image from 'next/image';
import NewHero from '@/assets/images/hero-section/new-hero.svg';
import { Button, notification } from 'antd';
import { MdArrowRightAlt } from 'react-icons/md';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
      const { user } = useAppSelector((state) => state.auth);
      const router = useRouter();

      const handleClickCreateProfile = () => {
            if (!user) {
                  return notification.error({
                        message: 'Please login to create pet profile',
                  });
            }
            router.push('/dashboard/accounts');
      };
      return (
            <section className="hero-bg text-title -mt-[80px] h-[calc(100vh)] py-10 md:py-0">
                  <div className="container h-full mx-auto flex flex-col-reverse md:flex-row gap-5 items-center justify-between">
                        {/* Text Section */}
                        <div className="md:w-1/2 text-center md:text-left">
                              <h1 className="text-3xl italic font-extrabold leading-10 md:text-5xl mb-4">
                                    UNLEASH YOUR PET’S SWAG
                                    <br />
                                    WITH <span className="text-primary">FURBABYZ DRIP</span>
                              </h1>
                              <p className="mb-6 w-full max-w-[70ch]">
                                    Culture-inspired fashion for dogs who drip style. Dress your fur baby in the latest streetwear trends
                                    with bold, unique designs crafted for comfort and swag.
                              </p>

                              {/* Buttons */}
                              <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                                    <Button
                                          href="/products"
                                          shape="round"
                                          style={{
                                                height: 56,
                                                backgroundColor: '#31A2FF',
                                          }}
                                          type="primary"
                                    >
                                          Shop the Collection
                                    </Button>
                                    <Button
                                          onClick={handleClickCreateProfile}
                                          icon={<MdArrowRightAlt size={24} />}
                                          iconPosition="end"
                                          shape="round"
                                          style={{
                                                height: 56,
                                                backgroundColor: 'transparent',
                                                border: '1px solid black',
                                                color: 'black',
                                          }}
                                          type="primary"
                                    >
                                          Create Your Pet Profile
                                    </Button>
                              </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden">
                              <Image
                                    src={NewHero}
                                    alt="Pets in fashion"
                                    width={691}
                                    height={500}
                                    className="object-contain relative z-20 mx-auto w-full"
                              />
                              {/* <Image
                                    src={HeroDogInside}
                                    alt="Background dog illustration"
                                    width={669.46}
                                    height={393.12}
                                    className="object-contain w-[500px] absolute -top-[20%] z-10"
                              /> */}
                              {/* <Image
                                    src={HeroDogFoot2}
                                    alt="Dog paw print"
                                    width={100}
                                    height={100}
                                    className="object-contain absolute top-[10%] right-0 z-30"
                              /> */}
                              {/* <Image
                                    src={HeroDogFoot}
                                    alt="Dog paw print"
                                    width={80}
                                    height={80}
                                    className="object-contain absolute bottom-[20%] left-0 z-30"
                              /> */}
                        </div>
                  </div>
            </section>
      );
};

export default HeroSection;
