import { baseApi } from '@/redux/base/baseApi';

const faqApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getFaqs: builder.query({
                  query: () => {
                        //   const params = new URLSearchParams();
                        //   if (args) {
                        //         args.forEach((arg: TQueryParams) => {
                        //               params.append(arg.name, arg.value as string);
                        //         });
                        //   }
                        return { url: '/faq', method: 'GET' };
                  },
                  transformResponse: (response: any) => {
                        return response.data;
                  },
            }),
      }),
});

export const { useGetFaqsQuery } = faqApi;
