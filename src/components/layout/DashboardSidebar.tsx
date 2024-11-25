'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia';
import { PiDatabaseThin, PiGearThin, PiHeartThin, PiUserCircleThin } from 'react-icons/pi';
import Swal from 'sweetalert2';

const DashboardSidebar = () => {
      const pathName = usePathname();
      const router = useRouter();
      const handleBackClick = () => {
            router.back();
      };

      const handleLogOut = () => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: 'You have to login again for this!',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, logout!',
            }).then((result) => {
                  if (result.isConfirmed) {
                        router.push('/');
                        Swal.fire({
                              text: 'Logout successfully',
                              icon: 'success',
                        });
                  }
            });
      };

      const sideBarItems = [
            {
                  title: 'Accounts',
                  href: '/dashboard/accounts',
                  icon: <PiUserCircleThin size={24} />,
            },
            {
                  title: 'Wishlist',
                  href: '/dashboard/wishlist',
                  icon: <PiHeartThin size={24} />,
            },
            {
                  title: 'Transactions',
                  href: '/dashboard/transactions',
                  icon: <PiDatabaseThin size={24} />,
            },
            {
                  title: 'Settings',
                  href: '/dashboard/settings',
                  icon: <PiGearThin size={24} />,
            },
      ];

      return (
            <div className="flex flex-col h-full">
                  <div className="relative flex-grow">
                        <button className="cursor-pointer md:flex items-center space-x-4 mb-4 -ms-1" onClick={handleBackClick}>
                              <div className="bg-[#F3F9F5] rounded-full p-2 flex items-center justify-center">
                                    <LiaLongArrowAltLeftSolid size={20} />
                              </div>
                              <p className="text-black font-medium hidden md:block">Back</p>
                        </button>
                        <div className="space-y-3">
                              {sideBarItems.map((link, index) => {
                                    return (
                                          <Link
                                                key={index}
                                                href={link.href}
                                                className={`${
                                                      pathName == link.href ? 'bg-white' : 'hover:bg-white duration-200'
                                                } flex md:px-3 md:py-2 p-2 rounded-md items-center justify-center md:justify-between md:gap-5`}
                                          >
                                                <span className="truncate">{link.title}</span>
                                                <span>{link.icon}</span>
                                          </Link>
                                    );
                              })}
                        </div>
                  </div>
                  <div className="flex justify-center mb-4">
                        <button onClick={handleLogOut} className="flex items-center gap-3 text-center">
                              Log out
                              <CiLogout size={20} />
                        </button>
                  </div>
            </div>
      );
};

export default DashboardSidebar;
