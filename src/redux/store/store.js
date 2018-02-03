import { createStore } from 'redux';
import { allReducers } from '../reducers/all';

//开发模式
export const store = createStore(
  allReducers,
  //生成模式注释下行
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
