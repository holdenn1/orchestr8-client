import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Project } from './types/projectSliceTypes';

type InitialStateProjectSlice = {
  projects: Project[];
  currentProject: null | Project;
};

const initialState: InitialStateProjectSlice = {
  projects: [
    {
      projectId: 1,
      title: 'lorem we24',
      description: 'ld;asl lkwkelwpq, ;we; p,we',
      tasks: [
        {
          taskId: 1,
          text: 'slkdfl,;lwe,f e;fslkdfl,;lwe,f e;fwl, ;ewfslkdfl,;lwe,f e;fwl, ;ewfwl, ;ewf',
          completed: false,
        },
        { taskId: 2, text: 'slkdfl,;lwe,f e;fwl, ;ewf', completed: false },
        { taskId: 3, text: 'slkdfl,;lwe,f e;fwl, ;ewf', completed: false },
      ],
      completedTask: [],
      projectParticipants: [],
    },
  ],
  currentProject: {
    projectId: 0,
    title: '',
    description: '',
    tasks: [],
    completedTask: [],
    projectParticipants: [],
  },
};

type ToggleCompletePAyload = {
  projectId: number;
  taskId: number;
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    toggleComplete(state, action: PayloadAction<ToggleCompletePAyload>) {
      state.projects.forEach((pr) => {
        if (pr.projectId === action.payload.projectId) {
          pr.tasks.forEach((task) => {
            if (task.taskId === action.payload.taskId) {
              task.completed = !task.completed;
            }
          });
          pr.completedTask = pr.tasks.filter((task) => task.completed);
        }
      });
    },
    setCurrentProject(state, action: PayloadAction<Project>) {
      state.currentProject = action.payload;
    },
    removeTask(state, action: PayloadAction<ToggleCompletePAyload>) {
      state.projects.forEach((pr) => {
        if (pr.projectId === action.payload.projectId) {
          pr.tasks = pr.tasks.filter((task) => task.taskId !== action.payload.taskId);
        }
      });
    },
    removeProject(state, action: PayloadAction<number>) {
      state.projects = state.projects.filter((proj) => proj.projectId !== action.payload);
      state.currentProject = null;
    },
  },
});

export const { toggleComplete, setCurrentProject, removeTask, removeProject } =
  projectSlice.actions;
export default projectSlice.reducer;
