import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TApiResponseWithPagination, TQueryParams } from '@/types';

export interface ProductCategory {
      _id: string;
      name: string;
}

export interface TProduct {
      _id: string;
      category: ProductCategory;
      name: string;
      image: string[];
      video: string;
      price: number;
      size: string[];
      colors: string;
      gender: string;
      status: string;
      createdAt: string;
      features: string[];
      rating: number;
      count: string;
      description: string;
}

const productApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getNewArrivals: builder.query({
                  query: () => ({
                        url: '/product',
                        method: 'GET',
                  }),
                  transformResponse: (response: TApiResponseWithPagination<TProduct>) => response.data.result,
            }),
            getLimitedAddition: builder.query({
                  query: () => ({
                        url: '/product?category=Limited-Edition-Collections',
                        method: 'GET',
                  }),
                  transformResponse: (response: TApiResponseWithPagination<TProduct>) => response.data.result,
            }),
            getBestSellingProduct: builder.query({
                  query: () => ({
                        url: '/product/get-best-selling',
                        method: 'GET',
                  }),
                  transformResponse: (response: TApiResponse<TProduct[]>) => response.data,
            }),
            getFilterProducts: builder.query({
                  query: (args) => {
                        const params = new URLSearchParams();

                        if (args) {
                              args.forEach((arg: TQueryParams) => {
                                    // Only append parameters with non-empty values
                                    if (arg.value !== null && arg.value !== false && arg.value !== '') {
                                          params.append(arg.name, arg.value as string);
                                    }
                              });
                        }

                        return {
                              url: '/product',
                              method: 'GET',
                              params,
                        };
                  },
                  transformResponse: (response: TApiResponseWithPagination<TProduct>) => {
                        return { data: response.data.result, meta: response.data.meta };
                  },
            }),
            getSingleProduct: builder.query({
                  query: (id) => ({
                        url: `/product/${id}`,
                        method: 'GET',
                  }),
                  transformResponse: (response: TApiResponse<TProduct>) => response.data,
            }),
      }),
});

export const {
      useGetNewArrivalsQuery,
      useGetBestSellingProductQuery,
      useGetLimitedAdditionQuery,
      useGetFilterProductsQuery,
      useGetSingleProductQuery,
} = productApi;
