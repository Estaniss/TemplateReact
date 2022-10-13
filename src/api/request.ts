import axios from 'axios';
import {
  addAuthHeaders,
  successResponse,
  verifyExpiredToken,
} from './interceptors';

const baseURL = import.meta.env.VITE_BASE_PATH;

const request = axios.create({
  baseURL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

request.interceptors.response.use(successResponse, verifyExpiredToken);

request.interceptors.request.use(addAuthHeaders);

export default request;
