import { init } from '../store/init';

export const allReducers = (state = init, action) => {
  switch (action.type) {

  case 'DROP_ITEM':
    state.dropItems.push(action.item);
    return {...state};

  default:
    return state;
  }
};