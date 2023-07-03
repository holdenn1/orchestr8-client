import instance from '@/api';
import { AxiosRequestConfig } from 'axios';
import { LoginUserData, RegistrationUserData } from './types';

export const registrationUserRequest = (data: RegistrationUserData) =>
  instance.post('auth/registration', data);

export const loginUserRequest = (data: LoginUserData) =>
  instance.post('auth/login', data);

export const refreshRequest = (refreshToken: string) =>
  instance.get('auth/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` },
  } as AxiosRequestConfig);

export const logoutUserRequest = (accessToken: string) =>
  instance.get('auth/logout', {
    headers: { authorization: `Bearer ${accessToken}` },
  });
