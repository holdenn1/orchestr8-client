import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateTaskSlice, ProjectTask, TasksCountPayload } from './types/taskSliceTypes';

const initialState: InitialStateTaskSlice = {
  tasks: [],
  tasksCount: null,
  isLoading: false,
  currentPageTaskList: 1,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask(state, action: PayloadAction<ProjectTask>) {
      state.tasks.unshift(action.payload);
    },
    setTasks(state, action: PayloadAction<ProjectTask[]>) {
      const oldTasksIds = state.tasks.map((task) => task.id);
      const newTasks = action.payload.filter((task) => !oldTasksIds.includes(task.id));
      state.tasks = [...state.tasks, ...newTasks];
    },
    updateTask(state, action: PayloadAction<ProjectTask>) {
      const href = location.href;

      if (
        state.tasks.every((task) => task.completed) &&
        href.includes('tasks-completed') &&
        state.tasks.length !== 1
      ) {
        if (action.payload.completed) {
          state.tasks.unshift(action.payload);
        } else {
          state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        }
      } else {
        if (
          state.tasks.every((task) => task.completed) &&
          href.includes('tasks-completed') &&
          state.tasks.length === 1
        ) {
          state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        }
        if (state.tasks.length) {
          state.tasks = state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              task = action.payload;
            }
            return task;
          });
        }
      }
      state.tasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    },
    setTasksCount(state, action: PayloadAction<TasksCountPayload | null>) {
      state.tasksCount = action.payload;
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    clearTaskList(state) {
      state.tasks = [];
    },
    setCurrentPageTaskList(state, action: PayloadAction<number>) {
      state.currentPageTaskList = action.payload;
    },
  },
});

export const {
  setTask,
  setTasks,
  updateTask,
  setTasksCount,
  removeTask,
  clearTaskList,
  setCurrentPageTaskList,
} = taskSlice.actions;
export default taskSlice.reducer;
