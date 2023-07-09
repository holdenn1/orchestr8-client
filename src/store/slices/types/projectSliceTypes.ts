export type InitialStateProjectSlice = {
  projects: Project[];
  currentProject: null | Project;
  completedProjects: Project[];
  inProgresProjects: Project[];
  suspendedProjects: Project[];
};

export type Participant = {
  participantId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type ProjectTask = {
  taskId: number;
  text: string;
  completed: boolean;
};

type StatusProject = 'Completed' | 'In Progress' | 'Suspend' | 'Resume';
export type Project = {
  projectId: number;
  status: StatusProject;
  title: string;
  description: string;
  tasks: ProjectTask[];
  projectParticipants: Participant[];
};
