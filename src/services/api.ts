import axios from 'axios';
import { IApiResponse } from '../common/models/ApiResponse';
import { LocalStorageService } from './localStorage';

const headers = () => ({
  Authorization: `Bearer ${LocalStorageService.getToken()}`,
  Accept: '*/*',
});

export const API = {
  get: async <T>(
    serverUrl: string,
    path: string,
    params?: { [key: string]: any }
  ) => {
    const _path = path[0] === '/' ? path.substring(1) : path;
    return await axios.get<IApiResponse<T>>(
      serverUrl + '/' + _path + (params ? '?' + _paramSerializer(params) : ''),
      {
        headers: headers(),
      }
    );
  },

  post: async <T>(
    serverUrl: string,
    path: string,
    body?: { [key: string]: any }
  ) => {
    const _path = path[0] === '/' ? path.substring(1) : path;
    return await axios.post<IApiResponse<T>>(serverUrl + '/' + _path, body, {
      headers: headers(),
      timeout: 10000,
    });
  },

  delete: async <T>(
    serverUrl: string,
    path: string,
    params?: { [key: string]: any }
  ) => {
    const _path = path[0] === '/' ? path.substring(1) : path;
    return await axios.delete<IApiResponse<T>>(
      serverUrl + '/' + _path + (params ? '?' + _paramSerializer(params) : ''),
      {
        headers: headers(),
      }
    );
  },
  update: async <T>(
    serverUrl: string,
    path: string,
    data?: { [key: string]: any }
  ) => {
    const _path = path[0] === '/' ? path.substring(1) : path;
    return await axios.patch<IApiResponse<T>>(serverUrl + '/' + _path, data, {
      headers: headers(),
    });
  },
};

function _paramSerializer(paramObject?: { [key: string]: any }) {
  if (!paramObject) {
    return '';
  }
  const keys = Object.keys(paramObject);
  if (keys.length === 0) {
    return '';
  }
  return keys
    .map((key) => {
      return `${key}=${paramObject[key]}`;
    })
    .join('&');
}
