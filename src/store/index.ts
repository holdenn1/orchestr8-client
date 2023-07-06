import { configureStore } from '@reduxjs/toolkit';
import userReduser from './slices/userSlice';
import mainReducer from './slices/mainSlice';
import projectReducer from './slices/projectSlice';

export const store = configureStore({
  reducer: {
    account: userReduser,
    main: mainReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
