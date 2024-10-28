import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavItems';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';
import Profile from '@/assets/images/profile.svg';
const MobileDrawer = ({ open, setOpen, items }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; items: any[] }) => {
      const onClose = () => {
            setOpen(!open);
      };

      return (
            <Drawer placement="left" onClose={onClose} open={open}>
                  <div className="flex flex-col items-center gap-8">
                        <NavItems items={items} onClose={onClose} />
                        <div className="grid justify-center items-center space-y-3">
                                    {/* cart */}
                                    <Link
                                    onClick={onClose}
                                    
                                    href={'/cart'} className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#FDF7F8]">
                                          <AiOutlineShoppingCart color='#584857' size={28} />
                                    </Link>
                                    {/* search */}
                                    {/* <div className="w-14 mx-auto h-14 flex items-center justify-center rounded-full bg-[#FDF7F8]">
                                          <AiOutlineSearch size={28} />
                                    </div> */}
                                    <Link
                                     onClick={onClose}
                                   
                                    href="/login">
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
                                    {/* show when user loggedin */}
                                    <Link 
                                    
                                    onClick={onClose}
                                    href={'/accounts'}>
                                          <div className="w-14 h-14 mx-auto rounded-full overflow-hidden">
                                                <Image src={Profile} alt="Profile" width={56} height={56} className="object-cover mx-auto" />
                                          </div>
                                    </Link>
                              </div>
                  </div>
            </Drawer>
      );
};

export default MobileDrawer;
