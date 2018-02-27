import cheerio from 'cheerio';
import he from 'he'; 

//HTML TO AMP
const convert = (html) => {
  const $ = cheerio.load(html);
  $('table').remove();
  const items = $('h1, h2, h3, h4, h5, h6, p, img, ul');
  const drops = [];
  items.each((idx, el) => {
    switch (el.name) {
      //ChHead
      case 'h1': case 'h2': case 'h3':
      case 'h4': case 'h5': case 'h6':
        drops.push({
          template: 'ChHead',
          formData: {
            text: safe(cheerio(el).html().trim()),
            head: el.name.toUpperCase()
          }
        })
        break;
      //ChP
      case 'p':
        drops.push({
          template: 'ChP',
          formData: {
            text: safe(cheerio(el).html().trim()),
            align: 'left-align',
            size: 10,
            color: 'inherit',
          }
        })
        break;
      //ChImg
      case 'img':
        drops.push({
          template: 'ChImg',
          formData: {
            imgSrc: cheerio(el).attr('src'), 
            imgWidth: cheerio(el).attr('width') || 360,
            imgHeight: cheerio(el).attr('height') || 240,
            imgAlt: safe(cheerio(el).attr('alt')),
            href: '',
            title: safe(cheerio(el).attr('alt')),
            titleStyle: 'inherit',
            align: 'center'
          }
        })
        break;
      //ChUl
      case 'ul':
        const lists = [];
        cheerio(el).find('li').each((idx, el) => {
          lists.push({
            text: safe(cheerio(el).html().trim()),
            href: ''
          });
        });
        drops.push({
          template: 'ChUl',
          formData: {
            title: '',
            listStyle: 'listSytleDefault',
            list: lists
          }
        })
        break;
      default:
        break;
    }
  });
  return drops;
}

const safe = str => {
  if (str) {
    str = he.decode(str);
    str = str.replace(/href=/ig, 'data-href=');
  }
  return str;
}

export default convert;