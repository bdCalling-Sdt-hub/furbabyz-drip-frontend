import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';

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
            getBestSellingProduct: builder.query({
                  query: () => ({
                        url: '/product/get-best-selling',
                        method: 'GET',
                  }),
                  transformResponse: (response: TApiResponse<TProduct[]>) => response.data,
            }),
      }),
});

export const { useGetBestSellingProductQuery } = productApi;
