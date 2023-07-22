import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateAccountSlice, Project, User } from './types/userSliceTypes';

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
    addOwnProject(state, action: PayloadAction<Project>) {
      state.user.ownedProjects.push(action.payload);
    },
    setOwnProjects(state, action: PayloadAction<Project[]>) {
      state.user.ownedProjects = action.payload;
    },
  },
});

export const { setUser, removeUser, addOwnProject,setOwnProjects } = accountSlice.actions;
export default accountSlice.reducer;
