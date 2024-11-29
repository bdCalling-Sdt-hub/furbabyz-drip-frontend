import { baseApi } from '@/redux/base/baseApi';

const paymentApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            createPaymentIntent: builder.mutation({
                  query: (data) => {
                        return {
                              url: '/payment/create-payment',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
            paymentConfirmation: builder.mutation({
                  query: (data) => {
                        return {
                              url: '/payment/payment-confirmation',
                              method: 'PATCH',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useCreatePaymentIntentMutation, usePaymentConfirmationMutation } = paymentApi;
