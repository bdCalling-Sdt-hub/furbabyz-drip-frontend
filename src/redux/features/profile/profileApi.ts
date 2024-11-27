import { baseApi } from '@/redux/base/baseApi';

const profileApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getPetProfile: builder.query({
                  query: () => ({
                        url: '/petProfile/get-profile',
                  }),
                  transformResponse: (response: any) => response.data,
                  providesTags: ['Profile'],
            }),
            createPetProfile: builder.mutation({
                  query: (data) => ({
                        url: '/petProfile/create-profile',
                        method: 'POST',
                        body: data,
                  }),
                  invalidatesTags: ['Profile'],
            }),
            updatePetProfile: builder.mutation({
                  query: (args) => ({
                        url: `/petProfile/${args.id}`,
                        method: 'PATCH',
                        body: args.data,
                  }),
                  invalidatesTags: ['Profile'],
            }),
      }),
});

export const { useGetPetProfileQuery, useCreatePetProfileMutation, useUpdatePetProfileMutation } = profileApi;
