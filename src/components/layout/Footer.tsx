import Image from 'next/image';
import Link from 'next/link';
import Fb from '@/assets/images/social/fb.svg';
import Insta from '@/assets/images/social/insta.svg';
import Tiktok from '@/assets/images/social/tiktok.svg';
import Logo from '@/assets/images/logo.svg';
const Footer = () => {
      return (
            <footer className="bg-white">
                  <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between items-start gap-6">
                              {/* Logo and Description */}
                              <div className="w-full md:w-1/3 text-center md:text-left">
                                    <div className="flex flex-col items-center md:items-start">
                                          <Image src={Logo} alt="Furbabyz Drip" width={200} height={60} />

                                          <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                                                Culture-Inspired Fashion For Dogs Who Drip Style. Dress Your Fur Baby In The Latest
                                                Streetwear With Bold, Unique Design Crafted For Comfort And Swag.
                                          </p>
                                    </div>
                              </div>

                              {/* Shop Section */}
                              {/* <div className="w-full md:w-auto text-center md:text-left">
                                    <h3 className="font-bold mb-2">Shop</h3>
                                    <ul>
                                          <li>
                                                <Link href="/jackets" className="text-text-secondary hover:underline">
                                                      Jackets
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href="/hoodies" className="text-text-secondary hover:underline">
                                                      Hoodies
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href="/accessories" className="text-text-secondary hover:underline">
                                                      Accessories
                                                </Link>
                                          </li>
                                    </ul>
                              </div> */}

                              {/* Company Section */}
                              <div className="w-full md:w-auto text-center md:text-left">
                                    <h3 className="font-bold mb-2">Company</h3>
                                    <ul>
                                          <li>
                                                <Link href="/about-us" className="text-text-secondary hover:underline">
                                                      About Us
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href="/blogs" className="text-text-secondary hover:underline">
                                                      Our Blog
                                                </Link>
                                          </li>
                                    </ul>
                              </div>

                              {/* Help Section */}
                              <div className="w-full md:w-auto text-center md:text-left">
                                    <h3 className="font-bold mb-2">Help</h3>
                                    <ul>
                                          <li>
                                                <Link href="/faq" className="text-text-secondary hover:underline">
                                                      FAQ
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href="/contact-us" className="text-text-secondary hover:underline">
                                                      Contact Us
                                                </Link>
                                          </li>
                                    </ul>
                              </div>

                              {/* Social Media Section */}
                              <div className="w-full md:w-auto text-center md:text-left">
                                    <h3 className="font-bold mb-2">Connect with us</h3>
                                    <p className="text-text-primary text-sm mb-4">Follow us for latest updates.</p>
                                    <div className="flex space-x-4 justify-center md:justify-start">
                                          <Link href="#" className="text-text-secondary hover:underline">
                                                <Image src={Tiktok} width={30} height={30} alt="social" />
                                          </Link>
                                          <Link href="#" className="text-text-secondary hover:underline">
                                                <Image src={Fb} width={30} height={30} alt="social" />
                                          </Link>
                                          <Link href="#" className="text-text-secondary hover:underline">
                                                <Image src={Insta} width={30} height={30} alt="social" />
                                          </Link>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Footer */}
                  </div>
                  <div className="mt-8 bg-black text-center border-t border-gray-200 py-4">
                        <p className="text-text-secondary text-sm">© All rights reserved by FURBABYZDRIP</p>
                  </div>
            </footer>
      );
};

export default Footer;
