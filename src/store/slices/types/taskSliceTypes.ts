export type InitialStateTaskSlice = {
  tasks: ProjectTask[];
  tasksCount: TasksCountPayload;
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

export type TasksCountPayload = {
  totalCount: number;
  completed: number;
};
