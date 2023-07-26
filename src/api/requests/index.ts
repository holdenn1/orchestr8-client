import instance from '@/api';
import { AxiosRequestConfig } from 'axios';
import { CreateProjectData, LoginUserData, RegistrationUserData, UpdateProjectData } from './types';
import { StatusProject } from '@/store/slices/types/projectSliceTypes';

/* user's requsets */
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

/* projets' requests */

export const createProjectRequest = (data: CreateProjectData) => instance.post('/project/create', data);

export const searchUsersByEmailRequest = (email: string) =>
  instance.get(`/project/members?searchText=${email}`);

export const getOwnProjectsRequest = (status: string = StatusProject.ALL) =>
  instance.get(`/project/own-projects/${status}`);

export const updateOwnProjectsRequest = (projectId: string, updateProjectData: UpdateProjectData) =>
  instance.patch(`/project/${projectId}`, updateProjectData);

export const removeOwnProjectsRequest = (projectId: string) => instance.delete(`/project/${projectId}`);

export const getProjectCountsByStatusRequest = () => instance.get(`/project/project-count`);
