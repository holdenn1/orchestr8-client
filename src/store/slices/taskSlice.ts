import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateTaskSlice, ProjectTask } from './types/taskSliceTypes';

const initialState: InitialStateTaskSlice = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask(state, action: PayloadAction<ProjectTask>) {
      state.tasks.push(action.payload);
    },
    setTasks(state, action: PayloadAction<ProjectTask[]>) {
      state.tasks = action.payload;
    },
  },
});

export const { setTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
