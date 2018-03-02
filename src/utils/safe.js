import he from 'he';

//安全字串转换
export const safeStr = str => {
  if (str) {
    str = he.decode(str);
    //str = str.replace(/href=/ig, 'data-href=');
    str = str.replace(/file:\/\//ig, '');
    str = str.replace(/(c|d|e):\//ig, '');
    str = str.replace(/style="(.*)?"/ig, '');
    str = str.replace(/^\/information-view/ig, '//data.arachina.com/information-view');

  }
  return str;
}

//安全字串转换
export const safeHref = str => {
  if (str) {
    str = str.replace(/ href=/ig, ' data-href=');
  }
  return str;
}