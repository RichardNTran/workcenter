import {
  put,
  takeLatest,
  all
  // tslint:disable-next-line: no-submodule-imports
} from 'redux-saga/effects';

import { LoginStorage } from '../../util/local-storge';
import { AUTH_ACTION, MODAL_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';

import { authServices } from '../../services';

function* loginEmailPasswordWorker(action: any) {
  try {
    const result = yield authServices.loginEmailPassword({ ...action.payload });
    const { data, metadata } = result;
    if (metadata.status === 200 && data) {
      yield LoginStorage.setData(JSON.stringify({...result.data, token: metadata.token}), action.payload.remember);
      yield put({
        type: SUCCESS(AUTH_ACTION.LOGIN),
        payload: { userInfo: data }
      });
      yield put({ type: REQUEST(MODAL_ACTION.TOGGLE) });
    } else {
      yield put({
        type: FAILURE(AUTH_ACTION.LOGIN),
        payload: { errors: metadata.errors }
      });
    }
  } catch (e) {
    yield put({ type: FAILURE(AUTH_ACTION.LOGIN), errors: e.errors });
  }
}

function* registerUserWorker(action: any) {
  try {
    const result = yield authServices.registerUser({ ...action.payload });
    const { data, metadata } = result;
    if (metadata.status === 200 && data) {
      yield LoginStorage.setData(JSON.stringify({...result.data, token: metadata.token}), action.payload.remember);
      yield put({
        type: SUCCESS(AUTH_ACTION.REGISTER),
        payload: { userInfo: data }
      });
      yield put({ type: REQUEST(MODAL_ACTION.TOGGLE) });
    } else {
      yield put({
        type: FAILURE(AUTH_ACTION.REGISTER),
        payload: { errors: metadata.errors }
      });
    }
  } catch (e) {
    yield put({ type: FAILURE(AUTH_ACTION.REGISTER), errors: e.errors });
  }
}

function* logoutWorker(action: any) {
  try {
    yield LoginStorage.clearData();
    yield put({ type: SUCCESS(AUTH_ACTION.LOGOUT) });
  } catch (e) {
    yield put({ type: FAILURE(AUTH_ACTION.LOGOUT), errors: e.errors });
  }
}

function* getUserWorker(action: any) {
  try {
    const result = yield authServices.getUser({ ...action.payload });
    const { data, metadata } = result;
    yield LoginStorage.setData(JSON.stringify({...result.data, token: metadata.token}), action.payload.remember);
    yield put({
      type: SUCCESS(AUTH_ACTION.GET_USER),
      payload: { userInfo: data }
    });
  } catch (e) {
    yield put({ type: FAILURE(AUTH_ACTION.GET_USER), errors: e.errors });
  }
}

export default function* authSaga() {
  yield all([takeLatest(REQUEST(AUTH_ACTION.LOGIN), loginEmailPasswordWorker)]);
  yield all([takeLatest(REQUEST(AUTH_ACTION.REGISTER), registerUserWorker)]);
  yield all([takeLatest(REQUEST(AUTH_ACTION.LOGOUT), logoutWorker)]);
  yield all([takeLatest(REQUEST(AUTH_ACTION.GET_USER), getUserWorker)]);
}
