import Image from 'next/image';
import { getImageUrl } from '@/utils/getImageUrl';
import { useAppDispatch } from '@/redux/hooks';
import { updateQuantity } from '@/redux/features/cart/cartSlice';

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
            // Update quantity to +1
            dispatch(updateQuantity({ id, quantity: quantity + 1 }));
      };

      const handleDecreaseQuantity = () => {
            // Prevent decreasing below 1
            if (quantity > 1) {
                  dispatch(updateQuantity({ id, quantity: quantity - 1 }));
            }
      };

      return (
            <div className="shadow-md flex justify-between items-center p-4 rounded-lg">
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
                        </div>
                  </div>
                  <div className="flex items-center space-x-2">
                        <button onClick={handleUpdateQuantity} className="text-xl">
                              +
                        </button>
                        <span className="bg-black text-center mx-auto size-[24px] rounded-full text-white">{quantity}</span>
                        <button onClick={handleDecreaseQuantity} className="text-xl">
                              -
                        </button>
                  </div>
            </div>
      );
};
