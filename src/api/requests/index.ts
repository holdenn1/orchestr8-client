import instance from '@/api';
import { AxiosRequestConfig } from 'axios';

export const registrationUserRequest = (data) => instance.post('auth/registration', data);
export const loginUserRequest = (data) => instance.post('auth/login', data);
export const refreshRequest = (refreshToken) =>
  instance.get('auth/refresh', {
    headers: { authorization: `Bearer ${refreshToken}` },
  } as AxiosRequestConfig);
export const profileRequest = () => instance.get('auth/profile');
