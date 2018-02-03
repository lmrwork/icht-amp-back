export const drop_item = (item) => ({
  type: 'DROP_ITEM',
  item
});

export const sort_item = (before, after) => ({
  type: 'SORT_ITEM',
  before, after
});

export const actions = {
  drop_item,
  sort_item
};
