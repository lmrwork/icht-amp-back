import { init } from '../store/init';

export const allReducers = (state = init, action) => {
  switch (action.type) {

  case 'TEST':
    return { ...state, test:'test ' + action.ok };

  default:
    return state;
  }
};