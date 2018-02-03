import { init } from '../store/init';

export const allReducers = (state = init, action) => {
  switch (action.type) {

  case 'DROP_ITEM':
    state.dropItems.push(action.item);
    return {...state};

  case 'SORT_ITEM':
    //TODO：排序数组 idx，before，after
    return {...state};

  default:
    return state;
  }
};