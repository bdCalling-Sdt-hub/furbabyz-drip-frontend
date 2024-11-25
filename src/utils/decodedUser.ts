import { jwtDecode } from 'jwt-decode';

export const decodedUser = (token: string) => {
      let user;
      if (token) {
            user = jwtDecode(token);
      }
      return user;
};
