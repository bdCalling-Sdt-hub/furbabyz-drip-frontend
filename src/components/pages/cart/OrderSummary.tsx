'use client';
import { Button, notification } from 'antd';
import { OrderItem } from './OrderItem';
import { useAppSelector } from '@/redux/hooks';
import { Empty } from 'antd';
import CheckoutForm from '@/components/ui/payment/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// Type definitions
type CartItem = {
      id: string;
      name: string;
      price: number;
      quantity: number;
      image: string;
      size?: string;
      neckLength?: number;
      chestLength?: number;
      collarToTail?: number;
};

export type FormattedProduct = {
      productId: string;
      quantity: number;
      size?: string;
      neckSize?: number;
      chestSize?: number;
      collarSize?: number;
};

type PaymentData = {
      products: FormattedProduct[];
      subtotal: number;
      totalAmount: number;
};

export const OrderSummary = () => {
      const { user } = useAppSelector((state) => state.auth);
      const { items, subtotal, totalAmount } = useAppSelector(
            (state: { cart: { items: CartItem[]; subtotal: number; totalAmount: number } }) => state.cart
      );

      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

      // State for checkout and formatted data
      const [isCheckout, setIsCheckout] = useState(false);
      const [formattedData, setFormattedData] = useState<PaymentData | null>(null);

      const handleCheckoutClick = () => {
            // Format products data
            if (!user) {
                  return notification.error({
                        message: 'Please login to checkout',
                  });
            }
            const formattedProducts: FormattedProduct[] = items.map((item) => ({
                  productId: item.id,
                  quantity: item.quantity,
                  size: item.size,
                  neckSize: item.neckLength,
                  chestSize: item.chestLength,
                  collarSize: item.collarToTail,
            }));

            // Payment data
            const paymentNeededData: PaymentData = {
                  products: formattedProducts,
                  subtotal,
                  totalAmount,
            };

            // Store formatted data
            setFormattedData(paymentNeededData);
            setIsCheckout(true);
      };

      return (
            <div className="border rounded-lg p-6 max-w-3xl mx-auto">
                  <h2 className="text-lg font-medium text-text-primary mb-4">Order Summary</h2>

                  {items.length === 0 ? (
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
                                    {items.map((product, index) => (
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

                              <div className="mt-6">
                                    <Button type="primary" className="w-full rounded-full py-1" onClick={handleCheckoutClick}>
                                          Checkout
                                    </Button>
                              </div>

                              {isCheckout && formattedData && (
                                    <Elements stripe={stripePromise}>
                                          <div className="mt-6">
                                                <CheckoutForm
                                                      totalAmount={formattedData.totalAmount}
                                                      formattedProducts={formattedData.products}
                                                />
                                          </div>
                                    </Elements>
                              )}
                        </>
                  )}
            </div>
      );
};
