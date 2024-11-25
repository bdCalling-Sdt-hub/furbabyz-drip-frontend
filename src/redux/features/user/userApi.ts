import { baseApi } from '@/redux/base/baseApi';

const userApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            createUser: builder.mutation({
                  query: (data) => ({
                        url: '/user/create-user',
                        method: 'POST',
                        body: data,
                  }),
            }),
      }),
});

export const { useCreateUserMutation } = userApi;
