import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { NavigateFunction } from 'react-router-dom';

export type CreateTaskActionProps = {
  task: string;
  projectId: string;
  navigate: NavigateFunction;
};

export type FetchTasksActionProps = {
  projectId: string;
  statusTask: string;
};

export type CreateTaskResponse = {
  data: ProjectTask;
};

export type FetchTasksResponse = {
  data: ProjectTask[];
};
