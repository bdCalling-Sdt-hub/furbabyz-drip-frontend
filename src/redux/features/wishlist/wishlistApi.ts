import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';

const wishlistApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getWishlist: build.query({
                  query: () => {
                        return {
                              url: '/wishList',
                              method: 'GET',
                        };
                  },
                  transformResponse: (response: TApiResponse<any>) => {
                        return response.data;
                  },
                  providesTags: ['Wishlist'],
            }),
            addWishlist: build.mutation({
                  query: (id) => {
                        return {
                              url: `/wishList/add/${id}`,
                              method: 'POST',
                        };
                  },
                  invalidatesTags: ['Wishlist'],
            }),
            removeWishlist: build.mutation({
                  query: (id) => {
                        return {
                              url: `/wishList/remove/${id}`,
                              method: 'DELETE',
                        };
                  },
                  invalidatesTags: ['Wishlist'],
            }),
      }),
});

export const { useAddWishlistMutation, useGetWishlistQuery, useRemoveWishlistMutation } = wishlistApi;
