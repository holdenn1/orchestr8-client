import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateProjectSlice, Project } from './types/projectSliceTypes';

const initialState: InitialStateProjectSlice = {
  projects: [
    {
      projectId: 1,
      status: 'In Progress',
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
      projectParticipants: [
        {
          participantId: 0,
          email: 'qwe@lsd.com',
          firstName: 'Test',
          lastName: 'Testovich',
          phone: '',
        },
      ],
    },
  ],
  currentProject: {
    projectId: 0,
    status: 'In Progress',
    title: '',
    description: '',
    tasks: [],
    completedTask: [],
    projectParticipants: [],
  },
  completedProjects: [],
  inProgresProjects: [
    {
      projectId: 1,
      status: 'In Progress',
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
      projectParticipants: [
        {
          participantId: 0,
          email: 'qwe@lsd.com',
          firstName: 'Test',
          lastName: 'Testovich',
          phone: '',
        },
      ],
    },
  ],
  suspendedProjects: [],
};

type ToggleCompletePAyload = {
  projectId: number;
  taskId: number;
};

type DeleteParticipantsPayload = {
  projectId: number;
  participantId: number;
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
    deleteParticipants(state, action: PayloadAction<DeleteParticipantsPayload>) {
      state.projects.forEach((pr) => {
        if (pr.projectId === action.payload.projectId) {
          pr.projectParticipants = pr.projectParticipants.filter(
            (participants) => participants.participantId !== action.payload.participantId,
          );
        }
      });
      state.currentProject!.projectParticipants = state.currentProject?.projectParticipants.filter(
        (participants) => participants.participantId !== action.payload.participantId,
      )!;
    },
    completeProject(state, action: PayloadAction<Project>) {
      const isCompleteProject = state.completedProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );

      const isInProgresProjects = state.inProgresProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );
      if (isInProgresProjects) {
        state.inProgresProjects = state.inProgresProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
      }

      const isSuspendedProjects = state.suspendedProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );
      if (isSuspendedProjects) {
        state.suspendedProjects = state.suspendedProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
      }

      if (!isCompleteProject) {
        state.completedProjects.push(action.payload);
      } else {
        state.completedProjects = state.completedProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
        state.inProgresProjects.push(action.payload);
      }
    },
    suspendProject(state, action: PayloadAction<Project>) {
      const isCompleteProject = state.completedProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );
      if (isCompleteProject) {
        state.completedProjects = state.completedProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
      }

      const isInProgresProjects = state.inProgresProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );
      if (isInProgresProjects) {
        state.inProgresProjects = state.inProgresProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
      }

      const isSuspendedProjects = state.suspendedProjects.some(
        (pr) => pr.projectId === action.payload.projectId,
      );
      
      if (!isSuspendedProjects) {
        state.suspendedProjects.push(action.payload);
      } else {
        state.suspendedProjects = state.suspendedProjects.filter(
          (pr) => pr.projectId !== action.payload.projectId,
        );
        state.inProgresProjects.push(action.payload);
      }
    },
  },
});

export const {
  toggleComplete,
  setCurrentProject,
  removeTask,
  removeProject,
  deleteParticipants,
  completeProject,
  suspendProject,
} = projectSlice.actions;
export default projectSlice.reducer;
