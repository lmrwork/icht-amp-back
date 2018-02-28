import cheerio from 'cheerio';
import he from 'he'; 

//HTML TO AMP
const convert = (html) => {
  const $ = cheerio;
  const $$ = cheerio.load(html);
  $$('table').remove();
  const items = $$('h1, h2, h3, h4, h5, h6, p, img, ul');
  const drops = [];
  items.each((idx, el) => {
    switch (el.name) {
      //ChHead
      case 'h1': case 'h2': case 'h3':
      case 'h4': case 'h5': case 'h6':
        drops.push({
          template: 'ChHead',
          formData: {
            text: safe($(el).html().trim()),
            head: el.name.toUpperCase()
          }
        })
        break;
      //ChP
      case 'p':
        drops.push({
          template: 'ChP',
          formData: {
            text: safe($(el).html().trim()),
            align: 'left-align',
            size: 10,
            color: 'inherit',
          }
        })
        break;
      //ChImg
      case 'img':
        const parent = $(el).parent();
        let img_href = '';
        if (parent.length && parent[0].name === 'a') {
          img_href = $(parent).attr('href');
        }
        drops.push({
          template: 'ChImg',
          formData: {
            imgSrc: $(el).attr('src'), 
            imgWidth: $(el).attr('width') || 360,
            imgHeight: $(el).attr('height') || 240,
            imgAlt: safe($(el).attr('alt')),
            href: img_href,
            title: safe($(el).attr('alt')),
            titleStyle: 'inherit',
            align: 'center'
          }
        })
        break;
      //ChUl
      case 'ul':
        const lists = [];
        $(el).find('li').each((idx, el) => {
          if ($(el).children('a').length) {
            lists.push({
              text: safe($(el).text().trim()),
              href: $(el).children('a').attr('href')
            });
          } else {
            lists.push({
              text: safe($(el).html().trim()),
              href: ''
            });
          }
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