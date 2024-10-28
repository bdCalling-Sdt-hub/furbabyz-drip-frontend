import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NotFoundImage from '@/assets/images/others/not-found.png';

const NotFoundPage = () => {
      return (
            <div className="flex  my-20 items-center justify-center min-h-[80vh] md:container md:max-w-[1201px] border">
                  <div className="bg-white  w-full p-5 md:p-20 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
                        {/* Left Section */}
                        <div className="text-center md:text-left">
                              <h1 className="text-3xl font-semibold text-gray-800">Oops! Page Not Found</h1>
                              <p className="text-gray-600 mt-4">
                                    The page you&apos;re looking for doesn’t exist or has been moved. Please check the URL and try again, or
                                    go back to the homepage.
                              </p>

                              <Link href="/" passHref>
                                    <span className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                                          Back to Home
                                    </span>
                              </Link>

                              <div className="mt-4">
                                    <p className="text-gray-500">
                                          Need Help?{' '}
                                          <Link href="/contact-us">
                                                <span className="text-red-500 hover:underline">Contact us</span>
                                          </Link>
                                    </p>
                              </div>
                        </div>

                        {/* Right Section - 404 Image */}
                        <div>
                              <Image
                                    src={NotFoundImage.src}
                                    height={500} // Adjusted the height and width for better responsiveness
                                    width={500}
                                    alt="404 Illustration"
                                    className="max-w-full h-auto"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default NotFoundPage;
