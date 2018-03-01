import he from 'he';

//安全字串转换
export const safeStr = str => {
  if (str) {
    str = he.decode(str);
    str = str.replace(/href=/ig, 'data-href=');
    str = str.replace(/style="(.*)?"/ig, '');
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