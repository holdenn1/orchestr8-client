import axios, { CreateAxiosDefaults } from 'axios';
import { refreshRequest } from '@/api/requests';

const BASE_URL = 'http://localhost:7000/';

const instance = axios.create({
  baseURL: BASE_URL,
} as CreateAxiosDefaults);

instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (config.headers.authorization) {
      return config;
    }
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (err) => Promise.reject(err),
);

instance.interceptors.response.use(
  (response) => response,
  async (err) => {
    try {
      const {
        response: {
          data: { statusCode },
        },
        config,
      } = err;

      switch (statusCode) {
        case 401: {
          const refreshToken = localStorage.getItem('refreshToken');

          if (!refreshToken) {
            return Promise.reject(err);
          }

          const { data } = await refreshRequest(refreshToken);
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);

          return instance.request({
            ...config,
            headers: { authorization: `Bearer ${data.accessToken}` },
          });
        }
        default: {
          return Promise.reject(err);
        }
      }
    } catch (e) {
      localStorage.clear();
      return Promise.reject(err);
    }
  },
);
export default instance;
