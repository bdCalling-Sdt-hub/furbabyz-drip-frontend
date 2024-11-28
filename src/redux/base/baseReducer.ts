import { baseApi } from './baseApi';
import authReducer from '../features/auth/authSlice';
import filterReducer from '../features/filter/filterSlice';
import cartReducer from '../features/cart/cartSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
      key: 'auth',
      storage,
};
const persistCartConfig = {
      key: 'cart',
      storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

export const baseReducer = {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      filter: filterReducer,
      cart: persistedCartReducer,
};
