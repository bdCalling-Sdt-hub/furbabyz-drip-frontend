'use client';
import { Button } from 'antd';
import Image from 'next/image';
import Pet from '@/assets/images/landing-pet-profile/landing-pet-profile.png';
import { MdArrowRightAlt } from 'react-icons/md';
import Link from 'next/link';

const LandingPetProfile = () => {
      return (
            <div className="bg-[#F7F7F7] py-20">
                  <div className="container grid grid-cols-1 md:grid-cols-2 items-center justify-between  ">
                        {/* Left Section - Image */}
                        <div className="">
                              <div className="md:size-[440px] mx-auto border-4 border-secondary rounded-xl  ">
                                    <Image src={Pet} alt="Cool dog" width={525} height={1000} className="object-cover rounded-xl mx-auto" />
                              </div>
                        </div>

                        {/* Right Section - Text and Button */}
                        <div className="text-center md:text-left mt-8 md:mt-0 md:ml-8">
                              <h2 className="text-xl md:text-3xl font-semibold text-title">Why Create Pet&apos;s Profile?</h2>
                              <ul className="mt-4 text-text-secondary space-y-2">
                                    <li>
                                          <p>
                                                <strong>Perfect Fit, Every Time:</strong>
                                                <br />
                                          </p>
                                          <p>Our system will suggest the right sizes based on your pet’s breed and measurements.</p>
                                    </li>
                                    <li>
                                          <strong>Tailored Style Recommendations:</strong>
                                          <br />
                                          Get product suggestions based on pet’s preferences and the latest trends in dog fashion.
                                    </li>
                                    <li>
                                          <strong>Exclusive Offers:</strong>
                                          <br />
                                          Enjoy special discounts and early access to limited-edition collections, curated for your pet.
                                    </li>
                                    <li>
                                          <strong>Pet Favorites:</strong>
                                          <br />
                                          Save their favorite outfits and track past purchases, so you can easily reorder.
                                    </li>
                              </ul>
                              <div className="mt-6">
                                    <h3 className="text-lg text-[#414141] font-semibold">Get Started in 3 Easy Steps</h3>
                                    <ul className="list-decimal list-inside  text-text-secondary mt-2 space-y-1">
                                          <li>Share your pet’s name, breed, age, and personality.</li>
                                          <li>Enter key details like weight, height, and length for the perfect fit.</li>
                                          <li>
                                                Select your pet’s favorite colors, patterns, and style preferences—whether it’s sporty,
                                                casual, or luxury chic!
                                          </li>
                                    </ul>
                              </div>
                              <Link href={'/accounts'}>
                                    <Button
                                          className="mt-5"
                                          iconPosition="end"
                                          icon={<MdArrowRightAlt size={24} />}
                                          shape="round"
                                          style={{
                                                backgroundColor: '#584857',
                                                height: 56,
                                          }}
                                          type="primary"
                                    >
                                          Create Pet Profile
                                    </Button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default LandingPetProfile;
