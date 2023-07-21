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
    roles: [],
    ownedProjects: [],
    memberProjects: []
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
