/**
 * 历史记录使用全局对象.
 * 保留50条编辑记录 
 */

//保存历史
window.saveDropItems = (action, json) => {
  let histories = window.loadDropItems();
  if (!histories) {
    histories = [];
  }
  while(window.localStorage.getItem('dropItems').length > 5000000) {
    histories.pop();
  }
  histories.unshift({'time': new Date().toLocaleString(), action: action, 'json': json});
  window.localStorage.setItem('dropItems', JSON.stringify(histories));
}

//加载全部历史
window.loadDropItems = () => {
  return JSON.parse(window.localStorage.getItem('dropItems'));
}

//加载指定历史
window.loadDropItemsJson = (id) => {
  const histories = JSON.parse(window.localStorage.getItem('dropItems'));
  let dropItemsJson = null;
  if (histories) {
    dropItemsJson = histories[id].json;
  }
  return dropItemsJson;
}