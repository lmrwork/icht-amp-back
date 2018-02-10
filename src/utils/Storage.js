/**
 * 历史记录使用全局对象.
 * 保留50条编辑记录 
 */

//保存历史
window.saveDropItems = (action, json) => {
  let histories = window.loadDropItems();
  if (!histories) {
    histories = [];
  } else if (histories.length > 100) {
    histories.pop();
  }
  histories.unshift({'time': new Date().toLocaleString(), action: action, 'json': json});
  window.localStorage.setItem('dropItems', JSON.stringify(histories));
}

//加载全部历史
window.loadDropItems = () => {
  return JSON.parse(window.localStorage.getItem('dropItems'));
}

//加载制定历史
window.loadDropItem = (id) => {
  return JSON.parse(window.localStorage.getItem('dropItems'));
}