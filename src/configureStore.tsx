import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
