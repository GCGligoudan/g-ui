import axios from 'axios';

const service = axios.create({
  timeout: 50000,
});

service.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '';

service.interceptors.request.use(
  (config: any) => {
    // Do something before request is sent
    config.headers.token = sessionStorage.getItem('token') || undefined;
    return config;
  },
  (error: any) => {
    // Do something with request error
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default service;
