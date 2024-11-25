import { notification } from 'antd';

export const handleApiRequest = async (apiCall: Function, successMessage: string, errorMessage: string) => {
      try {
            const res = await apiCall();
            if (res?.success) {
                  notification.success({
                        message: successMessage,
                  });
                  return res;
            }
      } catch (error: any) {
            notification.error({
                  message: error?.data?.message || errorMessage,
            });
      }
};
