import { baseApi } from '@/redux/base/baseApi';

const newsletterApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            subscribe: builder.mutation({
                  query: (data) => ({
                        url: '/subscriber/create-subscriber',
                        method: 'POST',
                        body: data,
                  }),
            }),
      }),
});

export const { useSubscribeMutation } = newsletterApi;
