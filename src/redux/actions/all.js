export const drop_item = (item) => ({
  type: 'DROP_ITEM',
  item
});

export const sort_item = (before, after) => ({
  type: 'SORT_ITEM',
  before, after
});

export const prop_item = (index) => ({
  type: 'PROP_ITEM',
  index
});

export const delet_item = (index) => ({
  type: 'DELET_ITEM',
  index
});

export const update_item = (index, formData) => ({
  type: 'UPDATE_ITEM',
  index, formData
});

export const update_html = (html) => ({
  type: 'UPDATE_HTML',
  html
});

export const save_history = (action) => ({
  type: 'SAVE_HISTORY',
  action
});

export const load_history = (id) => ({
  type: 'LOAD_HISTORY',
  id
});

export const save_qrcode = (qrCode) => ({
  type: 'SAVE_QRCODE',
  qrCode
});

export const actions = {
  drop_item,
  sort_item,
  prop_item,
  delet_item,
  update_item,
  update_html,
  save_history,
  load_history,
  save_qrcode
};
