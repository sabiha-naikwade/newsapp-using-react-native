import axios from 'axios';
import {API_URL} from '../config';
import {config, httpStatus} from '../constants';
import {getAuthToken, createAuthToken} from '../utils/authToken';
import {getUUID} from '../utils/keychain';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async conf => {
    if (conf.url !== '/token') {
      let token = await getAuthToken();
      if (!token) {
        const deviceUUID = await getUUID();
        await createAuthToken(deviceUUID);
      }
      conf.headers.authorization = `Bearer ${token}`;
    }
    return conf;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === httpStatus.UNAUTHORIZED) {
      // TODO: Revisit this interceptor once account login/logout is finished. Clear the token and navigate to Login page if there's 401
    }
    return Promise.reject(error);
  },
);

const callApi = async (method, path, options) => {
  const requestConfig = {
    method,
    baseURL: API_URL,
    url: path,
    params: options && options.queryParams,
    data: options && options.body,
    headers: {
      'Content-Type': 'application/json',
      ...(options && options.headers),
    },
    responseType:
      options && options.responseType ? options.responseType : 'json',
    timeout: config.DEFAULT_TIMEOUT,
  };

  return axiosInstance(requestConfig);
};

export default class ApiClient {
  static get = (path, options) => {
    return callApi('get', path, options);
  };

  static post = (path, options) => {
    return callApi('post', path, options);
  };

  static put = (path, options) => {
    return callApi('put', path, options);
  };

  static delete = (path, options) => {
    return callApi('delete', path, options);
  };
}
