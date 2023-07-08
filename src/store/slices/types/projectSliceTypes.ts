export type InitialStateProjectSlice = {
  projects: Project[];
  currentProject: null | Project;
};

export type Participant = {
  participantId: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type ProjectTask = {
  taskId: number;
  text: string;
  completed: boolean;
};

export type Project = {
  projectId: number;
  title: string;
  description: string;
  tasks: ProjectTask[];
  completedTask: ProjectTask[];
  projectParticipants: Participant[];
};
