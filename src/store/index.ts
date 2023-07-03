import { configureStore } from '@reduxjs/toolkit';
import userReduser from './slices/userSlice';
import mainReducer from './slices/mainSlice';

export const store = configureStore({
  reducer: {
   account: userReduser,
   main: mainReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
