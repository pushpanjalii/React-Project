import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // ✅ must be a valid reducer function

export const store = configureStore({
  reducer: {
    auth: authReducer, // key is slice name, value is reducer function
  },
});
export default store;