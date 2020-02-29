import {
  put,
  takeLatest,
  all
  // tslint:disable-next-line: no-submodule-imports
} from 'redux-saga/effects';

import { PRODUCT_ACTION, SUCCESS, FAILURE, REQUEST } from '../constant';

import { productServices } from '../../services';

function* getProductDetail(action: any) {
  try {
    const result = yield productServices.getProductDetail({ ...action.payload });
    const { data, metadata } = result;
    if (metadata.status === 200 && data) {
      yield put({
        type: SUCCESS(PRODUCT_ACTION.GET_DETAIL),
        payload: { productDetail: data }
      });
    }
  } catch (e) {
    yield put({ type: FAILURE(PRODUCT_ACTION.GET_DETAIL), errors: e.errors });
  }
}

export default function* authSaga() {
  yield all([takeLatest(REQUEST(PRODUCT_ACTION.GET_DETAIL), getProductDetail)]);
}
