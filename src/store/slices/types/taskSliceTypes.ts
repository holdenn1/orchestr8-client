export type InitialStateTaskSlice = {
  tasks: ProjectTask[];
  tasksCount: TasksCountPayload;
  isLoading: boolean;
  currentPageTaskList: number;
};

export enum StatusTask {
  ALL = 'tasks-all',
  COMPLETED = 'tasks-completed',
}

export type ProjectTask = {
  id: number;
  task: string;
  completed: boolean;
  createAt: Date;
  updateAt: Date;
};

export type TasksCountPayload = {
  totalCount: number;
  completed: number;
};
