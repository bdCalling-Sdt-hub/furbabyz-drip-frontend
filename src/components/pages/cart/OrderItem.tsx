import Image from 'next/image';
import ProductImg from '@/assets/images/cart/product.png';

// Order Item Component
export const OrderItem = ({ name, price, id }: { name: string; price: string; id: string }) => {
      return (
            <div className="shadow-md flex justify-between items-center p-4 rounded-lg">
                  <div className="flex space-x-4">
                        <Image
                              width={1000}
                              height={1000}
                              src={ProductImg.src}
                              alt="Product"
                              className="w-20 h-[120px] object-cover rounded-lg"
                        />
                        <div>
                              <h3 className="text-md font-medium text-title">{name}</h3>
                              <p className="text-sm text-gray-500">ID {id}</p>
                              <p className="text-md font-medium mt-2 text-tile">${price}</p>
                        </div>
                  </div>
                  <div className="flex items-center space-x-2">
                        <button className="text-md">+</button>
                        <span className="bg-black text-center mx-auto size-[24px] rounded-full text-white">2</span>
                        <button className="text-md">-</button>
                  </div>
            </div>
      );
};
