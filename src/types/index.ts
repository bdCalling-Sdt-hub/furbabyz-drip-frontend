export type TApiResponse<T> = {
      success: string;
      message: string;
      data?: T;
};
export type TApiResponseWithPagination<T> = {
      success: string;
      message: string;
      data: {
            result: T[];
            meta: {
                  page: number;
                  limit: number;
                  total: number;
                  totalPages: number;
                  currentPage: number;
            };
      };
};

export type TQueryParams = {
      name: string;
      value: string | number;
};
