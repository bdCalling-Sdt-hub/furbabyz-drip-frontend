import Image from 'next/image';
import { getImageUrl } from '@/utils/getImageUrl';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromCart, updateQuantity } from '@/redux/features/cart/cartSlice';

// Order Item Component
export const OrderItem = ({
      name,
      price,
      id,
      image,
      quantity,
}: {
      name: string;
      price: number;
      id: string;
      image: string;
      quantity: number;
}) => {
      const dispatch = useAppDispatch();

      const handleUpdateQuantity = () => {
            dispatch(updateQuantity({ id, quantity: quantity + 1 }));
      };

      const handleDecreaseQuantity = () => {
            if (quantity > 1) {
                  dispatch(updateQuantity({ id, quantity: quantity - 1 }));
            }
      };
      const handleRemoveItem = () => {
            dispatch(removeFromCart(id));
      };

      return (
            <div className="shadow flex justify-between items-center p-4 rounded-lg">
                  <div className="flex space-x-4">
                        <Image
                              width={1000}
                              height={1000}
                              src={getImageUrl(image)}
                              alt="Product"
                              className="w-20 h-[120px] object-cover rounded-lg"
                        />
                        <div>
                              <h3 className="text-md font-medium text-title">{name}</h3>
                              <p className="text-sm text-gray-500">ID {id}</p>
                              <p className="text-md font-medium mt-2 text-tile">${price}</p>
                              <button onClick={handleRemoveItem} className="text-red-500 text-sm">
                                    Remove
                              </button>
                        </div>
                  </div>
                  <div className="flex items-center space-x-2">
                        <button onClick={handleUpdateQuantity} className="text-2xl">
                              +
                        </button>
                        <span className="bg-black text-center mx-auto size-[24px] rounded-full text-white">{quantity}</span>
                        <button onClick={handleDecreaseQuantity} className="text-2xl">
                              -
                        </button>
                  </div>
            </div>
      );
};
