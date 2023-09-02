import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateAccountSlice, User } from './types/userSliceTypes';
import { loginUser } from '../actions/authActions/loginUser';
import { registrationUser } from '../actions/authActions/registrationUser';
import { logoutUser } from '../actions/authActions/logoutUser';

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
  isLoading: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(registrationUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registrationUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registrationUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUser, removeUser } = accountSlice.actions;
export default accountSlice.reducer;
