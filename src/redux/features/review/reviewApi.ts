import { baseApi } from '@/redux/base/baseApi';

const reviewApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            giveReviews: builder.mutation({
                  query: (data) => {
                        return {
                              url: '/review/create-review',
                              method: 'POST',
                              body: data,
                        };
                  },
            }),
      }),
});

export const { useGiveReviewsMutation } = reviewApi;
