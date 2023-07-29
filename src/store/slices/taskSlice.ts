import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateTaskSlice, ProjectTask, TasksCountPayload } from './types/taskSliceTypes';

const initialState: InitialStateTaskSlice = {
  tasks: [],
  tasksCount: {} as TasksCountPayload,
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
    setTasksCount(state, action: PayloadAction<TasksCountPayload>) {
      state.tasksCount = action.payload;
    },
  },
});

export const { setTask, setTasks, updateTask, setTasksCount } = taskSlice.actions;
export default taskSlice.reducer;
