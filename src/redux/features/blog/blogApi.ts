import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';
export interface TBlog {
      _id: string;
      title: string;
      des: string;
      image: string;
      status: string;
      createdAt: string;
      updatedAt: string;
}

const blogApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getBlogs: builder.query({
                  query: () => {
                        return { url: '/blog', method: 'GET' };
                  },
                  transformResponse: (response: TApiResponse<TBlog[]>) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetBlogsQuery } = blogApi;
