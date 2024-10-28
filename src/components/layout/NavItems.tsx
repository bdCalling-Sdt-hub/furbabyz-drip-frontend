import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = ({ items, onClose }: { items: any[]; onClose?: () => void }) => {
      const pathname = usePathname();

      return (
            <>
                  {items.map((item, index) => (
                        <Link
                              key={index}
                              onClick={onClose}
                              className={`text-text-primary leading-4 ${pathname === item.path ? 'font-semibold' : ''}`}
                              href={item.path}
                        >
                              {item.label}
                        </Link>
                  ))}
            </>
      );
};

export default NavItems;
