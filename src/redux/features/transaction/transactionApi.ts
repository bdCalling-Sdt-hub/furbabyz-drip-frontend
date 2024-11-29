import { baseApi } from '@/redux/base/baseApi';

const transactionApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getTransactions: builder.query({
                  query: () => {
                        return {
                              url: '/payment/getUser',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: any) => response,
            }),
      }),
});

export const { useGetTransactionsQuery } = transactionApi;
