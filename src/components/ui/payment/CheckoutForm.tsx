'use client';
import { useState } from 'react';
import { Button, notification } from 'antd';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCreatePaymentIntentMutation, usePaymentConfirmationMutation } from '@/redux/features/payment/paymentApi';
import { FormattedProduct } from '@/components/pages/cart/OrderSummary';
import { useAppDispatch } from '@/redux/hooks';
import { clearCart } from '@/redux/features/cart/cartSlice';

type CheckoutFormProps = {
      totalAmount: number;
      formattedProducts: FormattedProduct[];
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ totalAmount, formattedProducts }) => {
      const [createPaymentIntent] = useCreatePaymentIntentMutation();
      const [confirmPayment] = usePaymentConfirmationMutation();
      const dispatch = useAppDispatch();
      const stripe = useStripe();
      const elements = useElements();
      const [isProcessing, setIsProcessing] = useState<boolean>(false);
      const [paymentError, setPaymentError] = useState<string | null>(null);

      const handlePayment = async () => {
            if (!stripe || !elements) {
                  return;
            }

            setIsProcessing(true);
            setPaymentError(null);

            try {
                  const response = await createPaymentIntent({ products: formattedProducts }).unwrap();

                  const { client_secret } = response.data;
                  console.log(client_secret);

                  const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
                        payment_method: {
                              card: elements.getElement(CardElement) as any,
                        },
                  });

                  if (error) {
                        setPaymentError(error.message || 'An error occurred while processing your payment.');
                        setIsProcessing(false);
                  } else {
                        // Payment was successful
                        // console.log(paymentIntent, 'paymentIntent ===== =====');
                        notification.success({
                              message: 'Payment Successful',
                              description: `Your payment of $${totalAmount.toFixed(2)} was successful!`,
                        });

                        await confirmPayment({
                              client_secret: paymentIntent.client_secret,
                              status: paymentIntent.status,
                        }).unwrap();
                        dispatch(clearCart());

                        setIsProcessing(false);
                  }
            } catch (err) {
                  console.error('Error processing payment:', err);
                  setPaymentError('An error occurred while processing the payment.');
                  setIsProcessing(false);
            }
      };

      return (
            <div>
                  <CardElement />
                  {paymentError && <p className="text-red-500">{paymentError}</p>}
                  <Button
                        className="my-5"
                        type="primary"
                        onClick={handlePayment}
                        disabled={isProcessing || !stripe || !elements}
                        loading={isProcessing}
                  >
                        {isProcessing ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
                  </Button>
            </div>
      );
};

export default CheckoutForm;
