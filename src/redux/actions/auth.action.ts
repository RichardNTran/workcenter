import { AUTH_ACTION, REQUEST } from '../constant';

export function login(data) {
  return {
    type: REQUEST(AUTH_ACTION.LOGIN),
    payload: data
  };
}

export function register(data) {
  return {
    type: REQUEST(AUTH_ACTION.REGISTER),
    payload: data
  };
}

export function logout() {
  return {
    type: REQUEST(AUTH_ACTION.LOGOUT)
  };
};

export function getUser(data) {
  return {
    type: REQUEST(AUTH_ACTION.GET_USER),
    payload: data
  };
}

export function clearAuthErrors() {
  return {
    type: REQUEST(AUTH_ACTION.CLEAR_ERRORS),
  };
}

export const clearAuthentication = (data: any) => (dispatch: any) => {
  dispatch({
    type: REQUEST(AUTH_ACTION.CLEAR_AUTH),
    payload: data
  });
};
