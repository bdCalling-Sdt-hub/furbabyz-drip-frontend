import { IMAGE_URL } from '@/redux/base/baseApi';

export const getImageUrl = (imagePath: string | undefined) => {
      if (!imagePath) return '';
      return imagePath?.startsWith('https') ? imagePath : `${IMAGE_URL}/${imagePath}`;
};
