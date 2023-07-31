import { updateOwnProjectsRequest, updateTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateProjectActionProps, UpdatedProjectRequest } from '../types/projectTypes';
import { updateProject } from '@/store/slices/projectSlice';
import { UpdatedTaskRequest } from '../types/tasksTypes';
import { updateTask } from '@/store/slices/taskSlice';

export const updateProjectAction = createAsyncThunk<void, UpdateProjectActionProps>(
  'project/updateProject',
  async (
    { updateProjectData: { title, description, status, membersIds }, updateTaskData, taskId, projectId },
    { dispatch },
  ) => {
    try {
      const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
        status,
      });
      if (data) {
        dispatch(updateProject(data));
      }
      if (title?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          title,
        });
        if (data) {
          dispatch(updateProject(data));
        }
      }
      if (description?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          description,
        });
        if (data) {
          dispatch(updateProject(data));
        }
      }
      if (membersIds) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          membersIds,
        });
        if (data) {
          dispatch(updateProject(data));
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
