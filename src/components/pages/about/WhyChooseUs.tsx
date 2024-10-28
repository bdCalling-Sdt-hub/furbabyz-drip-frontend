import Image from 'next/image';
import DogImage from '@/assets/images/about/dog2.svg';
import LikeImage from '@/assets/images/about/like.png';
import MedalImage from '@/assets/images/about/madel.png';

const WhyChooseUs = () => {
      return (
            <div className="container py-20">
                  <div className="space-y-8">
                        <h1 className="text-2xl text-title text-center">Why Choose Us</h1>
                        <div className="grid grid-cols-12 justify-center gap-5 items-center">
                              <div className="col-span-12 md:col-span-2 space-y-5">
                                    <h1 className="text-xl text-title">Best E-commerce by Ratings</h1>
                                    <p className="text-text-secondary">
                                          It is a long established fact that a reader will be distracted by the readable content of a page
                                          when looking at its layout. The point of using Lorem Ipsum.
                                    </p>
                              </div>
                              <div className="col-span-12 md:col-span-8 relative">
                                    <Image className="mx-auto" src={DogImage} alt="dog" width={723.94} height={405} />
                                    <Image
                                          className="mx-auto hidden xl:block absolute top-[48%] left-[4%] -translate-y-1/2"
                                          src={LikeImage}
                                          alt="dog"
                                          width={117}
                                          height={405}
                                    />
                                    <Image
                                          className="mx-auto hidden xl:block absolute top-[50%] right-[4%] -translate-y-1/2"
                                          src={MedalImage}
                                          alt="dog"
                                          width={117}
                                          height={405}
                                    />
                              </div>
                              <div className="col-span-12 md:col-span-2 space-y-5">
                                    <h1 className="text-xl text-title">Certified Brand Cloths</h1>
                                    <p className="text-text-secondary">
                                          It is a long established fact that a reader will be distracted by the readable content of a page
                                          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                          distribution of letters.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default WhyChooseUs;
