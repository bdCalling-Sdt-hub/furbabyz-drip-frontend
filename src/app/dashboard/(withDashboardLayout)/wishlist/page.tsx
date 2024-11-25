import { products } from '@/const/const';
import Image from 'next/image';
import Link from 'next/link';
import { BsSuitHeartFill } from 'react-icons/bs';
import { RxStarFilled } from 'react-icons/rx';

const WishListPage = () => {
      return (
            <div>
                  <h1 className="text-title font-medium text-md md:text-xl mb-4">Saved Wishlist</h1>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {products.slice(0, 3).map((product) => (
                              <div key={product.id}>
                                    <div className="product-card bg-[#FBFBFB] relative h-full rounded-lg overflow-hidden">
                                          <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={300}
                                                className="object-contain mx-auto"
                                          />
                                          <Link href={`/products/${1}`} className="p-4 h-full text-center">
                                                <h2 className="text-md md:text-lg text-title font-medium">{product.title}</h2>
                                                <div className="flex items-center justify-center text-yellow-500 mb-2">
                                                      <RxStarFilled size={16} /> <span className="ml-2 text-[12px]">{product.rating}</span>
                                                      <span className="ml-2 text-gray-500">({product.reviews})</span>
                                                </div>
                                                <p className="text-xl font-medium">{product.price}</p>
                                          </Link>
                                          <BsSuitHeartFill size={28} className="absolute top-6 right-6  text-red-500" />
                                          
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default WishListPage;
