import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateAccountSlice, User } from './types/userSliceTypes';

const initialState: InitialStateAccountSlice = {
  user: {
    userId: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    roles: [],
  },
};

const accountSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = accountSlice.actions;
export default accountSlice.reducer;
