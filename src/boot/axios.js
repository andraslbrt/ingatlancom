import axios from 'axios';
import { LocalStore } from '@/utils/helper';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const api = axios.create({ baseURL: process.env.VUE_APP_API_URL });


api.interceptors.request.use((config) => {
  const token = LocalStore.getToken();
  if (token !== undefined && token !== null) {
    config.headers.Authorization = `Bearer ${LocalStore.getToken()}`;
  }
  return config;
}, (error) => Promise.reject(error));


api.interceptors.response.use(
  async (response) => {
    if (response?.data?.error) {
      let caption = '-';
      try {
        caption = JSON.stringify(response?.data?.error);
      } catch (e) {
        caption = '-';
      }
      console.warn('Error:', caption);
    }
    return response;
  },
  async (error) => {
    if (error?.response?.status === 429) {
      console.error(error);
    }
    return Promise.reject(error);
  },
);

export { axios, api };
