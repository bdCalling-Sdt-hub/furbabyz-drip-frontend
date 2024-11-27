import { baseApi } from '@/redux/base/baseApi';

const selectOptionApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getCategories: build.query({
                  query: () => ({
                        url: '/category',
                        method: 'GET',
                  }),

                  transformResponse: (response: any) => response.data,
            }),
            getColors: build.query({
                  query: () => ({
                        url: '/     ',
                        method: 'GET',
                  }),

                  transformResponse: (response: any) => response.data,
            }),
      }),
});

export const { useGetCategoriesQuery } = selectOptionApi;
