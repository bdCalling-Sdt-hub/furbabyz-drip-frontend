import { baseApi } from '@/redux/base/baseApi';

const newsletterApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            subscribe: builder.mutation({
                  query: (data) => ({
                        url: '/newsletter/subscribe',
                        method: 'POST',
                        body: data,
                  }),
            }),
      }),
});

export const { useSubscribeMutation } = newsletterApi;
