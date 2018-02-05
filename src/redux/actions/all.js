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

export const actions = {
  drop_item,
  sort_item,
  prop_item,
  delet_item
};
