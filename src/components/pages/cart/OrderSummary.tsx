import { Button } from 'antd';
import { OrderItem } from './OrderItem';

// Order Summary Component
export const OrderSummary = () => {
      return (
            <div className="border rounded-lg p-6">
                  <h2 className="text-lg font-medium text-text-primary mb-4">Order Summary</h2>
                  <div className="space-y-4">
                        {[...Array(2)].map((_, index) => (
                              <OrderItem key={index} name="Kitiew Sweater of Heats" price="12.32" id="14143142341234" />
                        ))}
                  </div>

                  {/* Summary Section */}
                  <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                              <p className="font-medium text-text-secondary">Subtotal</p>
                              <p className="font-medium text-title">$30.12</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                              <p className="font-medium text-text-secondary">Delivery</p>
                              <p className="font-medium text-title">$30.12</p>
                        </div>
                        <div className="flex justify-between items-center mt-2 py-3 border-t border-gray-200">
                              <p className="text-md font-medium text-text-secondary">Total Amount</p>
                              <p className="text-md font-medium text-title">$90.24</p>
                        </div>
                  </div>

                  {/* Checkout Button */}
                  <div className="mt-6">
                        <Button type="primary" className="w-full rounded-full bg-[#31A2FF] py-1">
                              Checkout
                        </Button>
                  </div>
            </div>
      );
};
