import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Project } from './types/projectSliceTypes';

type InitialStateProjectSlice = {
  projects: Project[];
  currentProject: Project;
};

const initialState: InitialStateProjectSlice = {
  projects: [
    {
      projectId: 1,
      title: 'lorem we24',
      description: 'ld;asl lkwkelwpq, ;we; p,we',
      tasks: [
        { taskId: 1, text: 'slkdfl,;lwe,f e;fwl, ;ewf', completed: false },
        { taskId: 2, text: 'slkdfl,;lwe,f e;fwl, ;ewf', completed: false },
        { taskId: 3, text: 'slkdfl,;lwe,f e;fwl, ;ewf', completed: false },
      ],
    },
  ],
  currentProject: {
    projectId: 0,
    title: '',
    description: '',
    tasks: [],
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
      if (action.payload.projectId) {
        const project = state.projects.find(
          (project) => project.projectId === action.payload.projectId,
        );
        if (project) {
          project.tasks.forEach((project) => {
            if (project.taskId === action.payload.taskId) {
              project.completed = !project.completed;
            }
          });
        }
      }
    },
    setcurrentProject(state, action: PayloadAction<Project>) {
      state.currentProject = action.payload;
    },
  },
});

export const { toggleComplete, setcurrentProject } = projectSlice.actions;
export default projectSlice.reducer;
