import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateAccountSlice, User } from './types/userSliceTypes';

const initialState: InitialStateAccountSlice = {
  user: {
    id: null,
    firstName: '',
    lastName: '',
    photo: null,
    phone: '',
    email: '',
    memberProjects: [],
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
      state.user = {} as User;
    },
  },
});

export const { setUser, removeUser } = accountSlice.actions;
export default accountSlice.reducer;
