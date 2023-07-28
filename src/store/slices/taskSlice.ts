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
    updateTask(state, action: PayloadAction<ProjectTask>) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task = action.payload;
        }
        return task;
      });
    },
  },
});

export const { setTask, setTasks, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
