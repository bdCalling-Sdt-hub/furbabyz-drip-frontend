import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavItems';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Image from 'next/image';
// import Logo from '@/assets/images/logo.svg';
// import Profile from '@/assets/images/profile.svg';
import { getImageUrl } from '@/utils/getImageUrl';
import { TUser } from '@/redux/features/user/userApi';

const MobileDrawer = ({
      open,
      setOpen,
      items,
      profile,
}: {
      open: boolean;
      setOpen: Dispatch<SetStateAction<boolean>>;
      items: any[];
      profile: TUser;
}) => {
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
                                    href={'/cart'}
                                    className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#FDF7F8]"
                              >
                                    <AiOutlineShoppingCart color="#584857" size={28} />
                              </Link>
                              {/* search */}
                              {/* <div className="w-14 mx-auto h-14 flex items-center justify-center rounded-full bg-[#FDF7F8]">
                                          <AiOutlineSearch size={28} />
                                    </div> */}
                              {profile ? (
                                    <Link onClick={onClose} href={'/dashboard/accounts'}>
                                          <div className="w-14 h-14 rounded-full overflow-hidden">
                                                <Image
                                                      src={getImageUrl(profile?.image)}
                                                      alt="Profile"
                                                      width={56}
                                                      height={56}
                                                      className="object-cover"
                                                />
                                          </div>
                                    </Link>
                              ) : (
                                    <Link onClick={onClose} href="/login">
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
                  </div>
            </Drawer>
      );
};

export default MobileDrawer;
