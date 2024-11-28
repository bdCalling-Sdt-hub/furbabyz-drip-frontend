'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.svg';

import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';

import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import { usePathname } from 'next/navigation';
import { Button } from 'antd';
import { useAppSelector } from '@/redux/hooks';
import { useMyProfileQuery } from '@/redux/features/user/userApi';
import { getImageUrl } from '@/utils/getImageUrl';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      const { user } = useAppSelector((state) => state.auth);
      const { data: profile } = useMyProfileQuery(undefined, {
            skip: !user,
      });
      // console.log(profile);
      const pathname = usePathname();
      const items = [
            { label: 'Home', path: '/' },
            { label: 'Products', path: '/products' },
            { label: 'About Us', path: '/about-us' },
      ];

      return (
            <header className={`container ${pathname == '/' ? 'bg-transparent' : 'bg-[#fff]'} h-[80px]  relative z-[99]`}>
                  <nav className="w-full h-full ">
                        <div className="flex justify-between items-center h-full">
                              {/* Logo */}
                              <Link href={'/'}>
                                    <Image alt="Logo" src={Logo} width={131} height={30} />
                              </Link>

                              {/* Nav Items for Desktop */}
                              <div className="hidden md:flex items-center gap-8">
                                    <NavItems items={items} />
                              </div>
                              <div className="hidden md:flex items-center space-x-6">
                                    {/* cart */}
                                    <Link href={'/cart'} className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FDF7F8]">
                                          <AiOutlineShoppingCart size={28} />
                                    </Link>
                                    {/* search */}
                                    {/* <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FDF7F8]">
                                          <AiOutlineSearch size={28} />
                                    </div> */}
                                    {user ? (
                                          <Link href={'/dashboard/accounts'}>
                                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                                      <Image
                                                            src={getImageUrl(profile?.image)}
                                                            alt="Profile"
                                                            width={56}
                                                            height={56}
                                                            className="object-cover rounded-full h-full"
                                                      />
                                                </div>
                                          </Link>
                                    ) : (
                                          <Link href="/login">
                                                <Button
                                                      shape="round"
                                                      style={{
                                                            backgroundColor: '#584857',
                                                            height: 48,
                                                      }}
                                                      type="primary"
                                                >
                                                      Login
                                                </Button>
                                          </Link>
                                    )}
                              </div>
                              <div className="md:hidden">
                                    <AiOutlineMenu
                                          onClick={() => setShowDrawer(!showDrawer)}
                                          className="text-primaryText cursor-pointer"
                                          size={24}
                                    />
                              </div>
                        </div>
                  </nav>

                  {/* Mobile Drawer */}
                  <MobileDrawer profile={profile} open={showDrawer} setOpen={setShowDrawer} items={items} />
            </header>
      );
};

export default Navbar;
