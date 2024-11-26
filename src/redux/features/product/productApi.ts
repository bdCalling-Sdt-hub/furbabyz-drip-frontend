import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse, TApiResponseWithPagination } from '@/types';

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
      size: string;
      colors: string;
      gender: string;
      status: string;
      createdAt: string;

      rating: number;
      count: string;
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
      }),
});

export const { useGetNewArrivalsQuery, useGetBestSellingProductQuery, useGetLimitedAdditionQuery } = productApi;
