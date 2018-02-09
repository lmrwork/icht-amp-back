/**
 * 历史记录使用全局对象.
 */

//保存部件历史
window.saveDropItems = (json) => {
  const key = new Date().toUTCString();
  window.localStorage.setItem('dropItems', JSON.stringify({
    'time': key,
    'json': json
  }));
}

//加载部件历史
window.loadDropItems = () => {
  return window.localStorage.getItem('dropItems');
}