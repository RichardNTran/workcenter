import { PRODUCT_ACTION, REQUEST } from '../constant';

export function getProductDetail(data) {
  return {
    type: REQUEST(PRODUCT_ACTION.GET_DETAIL),
    payload: data,
  };
}
