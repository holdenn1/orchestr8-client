import { configureStore } from '@reduxjs/toolkit';
import userReduser from './slices/userSlice';
import projectReducer from './slices/projectSlice.ts';
import taskReducer from './slices/taskSlice.ts';
import mainReducer from './slices/mainSlice';

export const store = configureStore({
  reducer: {
    account: userReduser,
    project: projectReducer,
    task: taskReducer,
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
