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
  completedTask: ProjectTask[]
  projectParticipants: string[]
};
