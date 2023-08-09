import { updateOwnProjectStatusRequest, updateOwnProjectsRequest, updateTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateProjectActionProps, UpdatedProjectRequest } from '../types/projectTypes';
import { updateOwnProject } from '@/store/slices/projectSlice';
import { UpdatedTaskRequest } from '../types/tasksTypes';
import { updateTask } from '@/store/slices/taskSlice';

export const updateOwnProjectAction = createAsyncThunk<void, UpdateProjectActionProps>(
  'project/updateOwnProjectAction',
  async (
    { updateProjectData: { title, description, status, membersIds }, updateTaskData, taskId, projectId },
    { dispatch },
  ) => {
    try {
      if (status) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectStatusRequest(projectId, {
          status,
        });
        if (data) {
          dispatch(updateOwnProject(data));
        }
      }
      if (title?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          title,
        });
        if (data) {
          dispatch(updateOwnProject(data));
        }
      }
      if (description?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          description,
        });
        if (data) {
          dispatch(updateOwnProject(data));
        }
      }
      if (membersIds) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          membersIds,
        });
        if (data) {
          dispatch(updateOwnProject(data));
        }
      }
      if (updateTaskData?.task?.length && taskId) {
        const { data }: UpdatedTaskRequest = await updateTaskRequest(taskId, {
          task: updateTaskData.task,
        });
        if (data) {
          dispatch(updateTask(data));
        }
      }
    } catch (e) {
      console.error(e);
    }
  },
);
