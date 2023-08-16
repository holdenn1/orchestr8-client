import instance from '@/api';
import { AxiosRequestConfig } from 'axios';
import {
  CreateProjectData,
  CreateTaskData,
  LoginUserData,
  RegistrationUserData,
  UpdateMemberRole,
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

export const uploadAvatar = (cover: File) => {
  const formData = new FormData();
  formData.append('cover', cover);

  return instance.post('user/upload-cover', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getUserRequest = () => instance.get('user/get-user');

export const updateMemberRole = (memberId: string, memberRole: UpdateMemberRole) =>
  instance.patch(`user/update/member-role/${memberId}`, memberRole);

/* projects' requests */

export const createProjectRequest = (data: CreateProjectData) => instance.post('/project/create', data);

export const searchUsersByEmailRequest = (email: string) =>
  instance.get(`/project/users?searchText=${email}`);

export const searchOwnProjectRequest = (titleProjectText: string, status: string) =>
  instance.get(`/project/search-own-projects/${status}?searchText=${titleProjectText}`);

export const searchForeignProjectRequest = (titleProjectText: string, status: string) =>
  instance.get(`/project/search-foreign-projects/${status}?searchText=${titleProjectText}`);

export const updateOwnProjectsRequest = (projectId: string, updateProjectData: UpdateProjectData) =>
  instance.patch(`/project/${projectId}`, updateProjectData);

export const updateOwnProjectStatusRequest = (projectId: string, updateProjectData: UpdateProjectData) =>
  instance.patch(`/project/update-status-proj/${projectId}`, updateProjectData);

export const removeOwnProjectsRequest = (projectId: string) => instance.delete(`/project/${projectId}`);

export const getOwnProjectsRequest = (status: string = StatusProject.ALL, currentPage: string) =>
  instance.get(`/project/own-projects/${status}?page=${currentPage}&pageSize=10`);

export const getOwnProjectCountsByStatusRequest = () => instance.get(`/project/own-project-count`);

export const getForeignProjectsRequest = (status: string = StatusProject.ALL, currentPage: string) =>
  instance.get(`/project/foreign-projects/${status}?page=${currentPage}&pageSize=10`);

export const getForeignProjectCountsByStatusRequest = () => instance.get(`/project/foreign-project-count`);

/* tasks' requests */

export const createTaskRequest = (data: CreateTaskData, projectId: string) =>
  instance.post(`/task/create/${projectId}`, data);

export const getTaskRequest = (projectId: string, status: string = StatusTask.ALL, currentPage: string) =>
  instance.get(`/task/${projectId}/${status}?page=${currentPage}&pageSize=10`);

export const updateTaskRequest = (taskId: string, updateTaskData: UpdateTaskData) =>
  instance.patch(`/task/${taskId}`, updateTaskData);

export const removeTaskRequest = (taskId: string) => instance.delete(`/task/${taskId}`);

export const geTasksCountsByStatusRequest = (projectId: string) =>
  instance.get(`task/tasks/count/${projectId}`);
