import axios from 'axios';
import { get } from 'lodash';
// import { LoginStorage } from '../util/local-storge';
import { SERVER_API_URL } from '../config/constants';
const DEFAULT_APP_URL = {
  baseURL: SERVER_API_URL,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
};

export const statusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export default class RestClient {
  config: any;
  constructor(config = {}) {
    this.config = { DEFAULT_APP_URL, config };
  }

  get(url, params = {}, config = {}) {
    return this.executeRequest(url, { ...config, params });
  }

  post(url, data, config = {}) {
    return this.executeRequest(url, { method: 'post', ...config, data });
  }

  put(url, data, config = {}) {
    return this.executeRequest(url, { method: 'put', ...config, data });
  }

  delete(url, data = {}, config = {}) {
    return this.executeRequest(url, { method: 'delete', ...config, data });
  }

  patch(url, data = {}, config = {}) {
    return this.executeRequest(url, { method: 'patch', ...config, data });
  }

  executeRequest(url, config) {
    // const userStorage = LoginStorage.authenticated();
    // const Authorization = userStorage ? `Bearer ${userStorage.auth_token}` : '';
    const finalHeaderConfig = { ...this.config.headers, ...config.headers };
    const finalConfig = {
      ...this.config,
      url,
      ...config,
      headers: { ...finalHeaderConfig }
    };
    return axios
      .request(finalConfig)
      .then(response => Promise.resolve(response.data))
      .catch(errorResponse => {
        const status = get(errorResponse, 'response.status', '');
        const error = get(errorResponse, 'response.data', { code: 1, data: null, message: ['Network error!'] });

        // if (status === statusCode.UNAUTHORIZED) {
        // }

        // if (status === statusCode.INTERNAL_SERVER_ERROR) {
        // }
        const newError = {
          status,
          ...error
        };
        return Promise.reject(newError);
      });
  }
}
