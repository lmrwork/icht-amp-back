import { init } from '../store/init';

export const allReducers = (state = init, action) => {
  switch (action.type) {

  case 'DROP_ITEM':
    let pos = parseInt(localStorage.getItem('insertID'), 10);
    if (pos) {
      state.dropItems.splice(pos + 1, 0, action.item);
      localStorage.removeItem('insertID');
    } else {
      state.dropItems.push(action.item);
    }
    return {...state};

  case 'SORT_ITEM':
    //TODO：排序数组 idx，before，after
    //TEST: { type: 'SORT_ITEM', before: 1, after:2 }
    state.dropItems.splice(action.before - 1, 1, ...state.dropItems.splice(action.after - 1, 1, state.dropItems[action.before - 1]));
    return {...state};

  case 'PROP_ITEM':
    //TEST: { type: 'PROP_ITEM', index:1 }
    return {...state, propIndex: action.index};

  case 'DELET_ITEM':
    state.dropItems.splice(action.index, 1);
    return {...state};

  case 'UPDATE_ITEM':
    state.dropItems[action.index].formData = action.formData;
    return {...state};

  case 'UPDATE_HTML':
    return {...state, html: action.html, json: JSON.stringify(state.dropItems.slice(1), null, 2) };

  case 'SAVE_HISTORY':
    let histories = window.loadDropItems();
    if (!histories) {
      histories = [];
    }
    window.saveDropItems(action.action, state.dropItems);
    return {...state};

  case 'LOAD_HISTORY':
    const dropItemsJson = window.loadDropItemsJson(action.id)
    return {...state, dropItems: dropItemsJson};

  case 'SAVE_QRCODE':
    return {...state, qrCode: action.qrCode};

  default:
    return state;
  }
};