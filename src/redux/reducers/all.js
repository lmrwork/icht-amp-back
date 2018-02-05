import { init } from '../store/init';

export const allReducers = (state = init, action) => {
  switch (action.type) {

  case 'DROP_ITEM':
    state.dropItems.push(action.item);
    return {...state};

  case 'SORT_ITEM':
    //TODO：排序数组 idx，before，after
    //TEST: { type: 'SORT_ITEM', before: 1, after:2 }
    state.dropItems.splice(action.before - 1, 1, ...state.dropItems.splice(action.after - 1, 1, state.dropItems[action.before - 1]));
    return {...state};

  case 'PROP_ITEM':
    //TODO：排序数组 idx，before，after
    //TEST: { type: 'PROP_ITEM', index:1 }
    return {...state, propIndex: action.index};

  case 'DELET_ITEM':
    //TODO：排序数组 idx，before，after
    //TEST: { type: 'PROP_ITEM', index:1 }
    state.dropItems.splice(action.index, 1);
    return {...state, propIndex: action.index};

  default:
    return state;
  }
};