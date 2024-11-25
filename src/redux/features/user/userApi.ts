import { baseApi } from '@/redux/base/baseApi';
import { TApiResponse } from '@/types';
export interface TUser {
      _id: string;
      name: string;
      role: string;
      email: string;
      phone: string;
      address: string;
      status: string;
      verified: boolean;
      image: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
}

const userApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            createUser: builder.mutation({
                  query: (data) => ({
                        url: '/user/create-user',
                        method: 'POST',
                        body: data,
                  }),
            }),
            myProfile: builder.query({
                  query: () => ({
                        url: '/user/profile',
                        method: 'GET',
                  }),
                  transformResponse: (response: any) => response.data,
            }),
      }),
});

export const { useCreateUserMutation, useMyProfileQuery } = userApi;
