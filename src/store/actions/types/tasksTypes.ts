import { UpdateTaskData } from '@/api/requests/types';
import { ProjectTask, TasksCountPayload } from '@/store/slices/types/taskSliceTypes';

export type CreateTaskActionProps = {
  task: string;
  projectId: string;
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

export type UpdateTaskActionProps = {
  taskId: string;
  updateData: UpdateTaskData;
};

export type UpdatedTaskRequest = {
  data: ProjectTask;
};

export type GeTasksCountActionResponse = {
  data: TasksCountPayload[]
}