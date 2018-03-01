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

export const save_css = (css) => ({
  type: 'SAVE_CSS',
  css
});

export const save_script = (script) => ({
  type: 'SAVE_SCRIPT',
  script
});

export const clear_dropitems = () => ({
  type: 'CLEAR_DROPITEMS'
});

export const saving_status = (status) => ({
  type: 'SAVING_STATUS',
  status
});

export const loading_status = (status) => ({
  type: 'LOADING_STATUS',
  status
});

export const amp_status = (status) => ({
  type: 'AMP_STATUS',
  status
});

export const load_items = (dropItems) => ({
  type: 'LOAD_ITEMS',
  dropItems
});

export const pop_items = () => ({
  type: 'POP_ITEMS'
});

export const taggle_site = (id) => ({
  type: 'TAGGLE_SITE',
  id
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
  save_qrcode,
  clear_dropitems,
  saving_status,
  loading_status,
  amp_status,
  save_css,
  save_script,
  load_items,
  pop_items,
  taggle_site
};
