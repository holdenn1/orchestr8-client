import { updateOwnProjectStatusRequest, updateOwnProjectsRequest, updateTaskRequest } from '@/api/requests';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateProjectActionProps, UpdatedProjectRequest } from '../types/projectTypes';
import { updateForeignProject, updateOwnProject, updateStatusOwnProject } from '@/store/slices/projectSlice';
import { UpdatedTaskRequest } from '../types/tasksTypes';
import { updateTask } from '@/store/slices/taskSlice';

export const updateProjectAction = createAsyncThunk<void, UpdateProjectActionProps>(
  'project/updateProjectAction',
  async (
    {
      updateProjectData: { title, description, status, membersIds },
      updateTaskData,
      taskId,
      projectId,
      list,
    },
    { dispatch },
  ) => {
    try {
      if (status) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectStatusRequest(projectId, {
          status,
        });
        if (data) {
          dispatch(updateOwnProject(data));
          dispatch(updateStatusOwnProject(data));
        }
      }

      if (title?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          title,
        });

        if (data) {
          if (list === 'own') {
            dispatch(updateOwnProject(data));
          } else {
            dispatch(updateForeignProject(data));
          }
        }
      }
      if (description?.length) {
        const { data }: UpdatedProjectRequest = await updateOwnProjectsRequest(projectId, {
          description,
        });
        if (data) {
          if (list === 'own') {
            dispatch(updateOwnProject(data));
          } else {
            dispatch(updateForeignProject(data));
          }
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
        const { data }: UpdatedTaskRequest = await updateTaskRequest({ projectId, taskId, updateTaskData });

        if (data) {
          dispatch(updateTask(data));
        }
      }
    } catch (e) {
      console.error(e);
    }
  },
);
