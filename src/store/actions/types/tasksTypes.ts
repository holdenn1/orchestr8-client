import { ProjectTask } from '@/store/slices/types/taskSliceTypes';
import { NavigateFunction } from 'react-router-dom';

export type CreateTaskActionProps = {
  task: string;
  projectId: string;
  navigate: NavigateFunction;
};

export type CreateTaskResponse = {
  data: ProjectTask;
};
