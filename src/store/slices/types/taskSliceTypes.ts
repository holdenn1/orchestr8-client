export type InitialStateTaskSlice = {
  tasks: ProjectTask[];
};

export enum StatusTask {
  ALL = 'all-tasks',
  COMPLETED = 'completed',
}

export type ProjectTask = {
  id: number;
  task: string;
  completed: boolean;
};
