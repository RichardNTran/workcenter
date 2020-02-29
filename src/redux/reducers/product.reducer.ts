import { PRODUCT_ACTION, SUCCESS } from '../constant';

const initialState = {
  productDetail: {},
  metaData: {},
  errors: [],
};

export type ProductReducer = Readonly<typeof initialState>;

export default (state: ProductReducer = initialState, action: any): ProductReducer => {
  switch (action.type) {
    case SUCCESS(PRODUCT_ACTION.GET_DETAIL):
      const { productDetail, metaData } = action.payload;
      return {
        ...state,
        productDetail,
        metaData: metaData,
      };
    default:
      return state;
  }
};
