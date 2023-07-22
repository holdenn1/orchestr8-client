import instance from '@/api';
import { AxiosRequestConfig } from 'axios';
import { CreateProjectData, LoginUserData, RegistrationUserData } from './types';

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

/* projets' requests */

export const createProjectRequest = (data: CreateProjectData) => instance.post('/project/create', data);

export const searchUsersByEmailRequest = (email: string) =>
  instance.get(`/project/members?searchText=${email}`);

export const getOwnProjectsRequest = () => instance.get('/project/owned-projects');
