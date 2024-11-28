// components/CheckoutForm.tsx
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Adjust import path as needed

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutForm: React.FC = () => {
      const dispatch = useDispatch();
      const { clientSecret, paymentSuccess, errorMessage } = useSelector((state: RootState) => state.payment);
      const stripe = useStripe();
      const elements = useElements();

      const [isProcessing, setIsProcessing] = useState<boolean>(false);

      const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();

            if (!stripe || !elements || !clientSecret) {
                  return;
            }

            setIsProcessing(true);
            const cardElement = elements.getElement(CardElement);

            if (cardElement) {
                  try {
                        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                              payment_method: {
                                    card: cardElement,
                              },
                        });

                        if (error) {
                              dispatch(setErrorMessage(error.message || 'Payment failed'));
                              setIsProcessing(false);
                        } else if (paymentIntent?.status === 'succeeded') {
                              dispatch(setPaymentSuccess(true));
                              setIsProcessing(false);
                              alert('Payment Successful!');
                        }
                  } catch (error) {
                        dispatch(setErrorMessage((error as Error).message));
                        setIsProcessing(false);
                  }
            }
      };

      if (!clientSecret) {
            return <div>Loading...</div>;
      }

      return (
            <form onSubmit={handleSubmit}>
                  <CardElement />
                  <button type="submit" disabled={!stripe || isProcessing}>
                        {isProcessing ? 'Processing...' : 'Pay Now'}
                  </button>

                  {errorMessage && <div>{errorMessage}</div>}
                  {paymentSuccess && <div>Payment successful!</div>}
            </form>
      );
};

const CheckoutPage: React.FC = () => {
      const dispatch = useDispatch();

      useEffect(() => {
            const fetchClientSecret = async () => {
                  const res = await fetch('/api/create-payment-intent', { method: 'POST' });
                  const data = await res.json();
                  dispatch(setClientSecret(data.clientSecret));
            };

            fetchClientSecret();
      }, [dispatch]);

      return (
            <div>
                  <h1>Checkout</h1>
                  <Elements stripe={stripePromise}>
                        <CheckoutForm />
                  </Elements>
            </div>
      );
};

export default CheckoutPage;
