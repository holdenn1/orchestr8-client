import instance from '@/api';
import { AxiosRequestConfig } from 'axios';
import {
  CreateProjectData,
  CreateTaskData,
  LoginUserData,
  RegistrationUserData,
  UpdateProjectData,
  UpdateTaskData,
} from './types';
import { StatusProject } from '@/store/slices/types/projectSliceTypes';
import { StatusTask } from '@/store/slices/types/taskSliceTypes';

/* user's requests */
export const registrationUserRequest = (data: RegistrationUserData) =>
  instance.post('auth/registration', data);

export const loginUserRequest = (data: LoginUserData) => instance.post('auth/login', data);

export const refreshRequest = (refreshToken: string) =>
  instance.get('auth/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` },
  } as AxiosRequestConfig);

export const logoutUserRequest = (accessToken: string) =>
  instance.get('auth/logout', {
    headers: { authorization: `Bearer ${accessToken}` },
  });

export const refreshTokensLogin = (refreshToken: string) =>
  instance.get('auth/refresh-login', {
    headers: { authorization: `Bearer ${refreshToken}` },
  } as AxiosRequestConfig);

/* projects' requests */

export const createProjectRequest = (data: CreateProjectData) => instance.post('/project/create', data);

export const searchUsersByEmailRequest = (email: string) =>
  instance.get(`/project/members?searchText=${email}`);

export const getOwnProjectsRequest = (status: string = StatusProject.ALL) =>
  instance.get(`/project/own-projects/${status}`);

export const updateOwnProjectsRequest = (projectId: string, updateProjectData: UpdateProjectData) =>
  instance.patch(`/project/${projectId}`, updateProjectData);

export const removeOwnProjectsRequest = (projectId: string) => instance.delete(`/project/${projectId}`);

export const getProjectCountsByStatusRequest = () => instance.get(`/project/project-count`);

/* tasks' requests */

export const createTaskRequest = (data: CreateTaskData, projectId: string) =>
  instance.post(`/task/create/${projectId}`, data);

export const getTaskRequest = (projectId: string, status: string = StatusTask.ALL) =>
  instance.get(`/task/${projectId}/${status}`);

export const updateTaskRequest = (taskId: string, updateTaskData: UpdateTaskData) =>
  instance.patch(`/task/${taskId}`, updateTaskData);

export const removeTaskRequest = (taskId: string) => instance.delete(`/task/${taskId}`);

export const geTasksCountsByStatusRequest = (projectId: string) => instance.get(`task/tasks/count/${projectId}`);
