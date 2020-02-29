import { combineReducers } from 'redux';
import commonReducer, { CommonReducer } from './common.reducer';
import authReducer, { AuthReducer } from './auth.reducer';
import productReducer, { ProductReducer } from './product.reducer';
export interface IRootState {
  readonly commonReducer: CommonReducer;
  readonly authReducer: AuthReducer;
  readonly productReducer: ProductReducer;
}

const rootReducer = combineReducers<IRootState>({
  commonReducer,
  authReducer,
  productReducer,
});

export default rootReducer;
