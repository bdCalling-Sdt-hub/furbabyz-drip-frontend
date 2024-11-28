import { Button } from 'antd';
import { OrderItem } from './OrderItem';
import { useAppSelector } from '@/redux/hooks';
import { Empty } from 'antd'; // Ant Design's Empty component

export const OrderSummary = () => {
      const { items, subtotal, totalAmount } = useAppSelector((state) => state.cart);

      return (
            <div className="border rounded-lg p-6 max-w-3xl mx-auto">
                  <h2 className="text-lg font-medium text-text-primary mb-4">Order Summary</h2>

                  {/* Check if cart is empty */}
                  {items?.length === 0 ? (
                        <div className="flex flex-col items-center justify-center space-y-4">
                              <Empty
                                    description={
                                          <p className="text-text-secondary">Your cart is empty. Start adding some amazing products!</p>
                                    }
                                    imageStyle={{ height: 120 }}
                              />
                              <Button shape="round" type="primary" href="/products">
                                    Go to Shop
                              </Button>
                        </div>
                  ) : (
                        <>
                              <div className="space-y-4">
                                    {items?.map((product, index) => (
                                          <OrderItem
                                                key={index}
                                                name={product.name}
                                                price={product.price}
                                                id={product.id}
                                                image={product.image}
                                                quantity={product.quantity}
                                          />
                                    ))}
                              </div>

                              {/* Summary Section */}
                              <div className="mt-6 border-t border-gray-200 pt-4">
                                    <div className="flex justify-between items-center">
                                          <p className="font-medium text-text-secondary">Subtotal</p>
                                          <p className="font-medium text-title">${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-2 py-3 border-t border-gray-200">
                                          <p className="text-md font-medium text-text-secondary">Total Amount</p>
                                          <p className="text-md font-medium text-title">${totalAmount.toFixed(2)}</p>
                                    </div>
                              </div>

                              {/* Checkout Button */}
                              <div className="mt-6">
                                    <Button type="primary" className="w-full rounded-full  py-1">
                                          Checkout
                                    </Button>
                              </div>
                        </>
                  )}
            </div>
      );
};
