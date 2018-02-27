import cheerio from 'cheerio';
//HTML TO AMP
const convert = (html) => {
  const $ = cheerio;
  const items = $.load(html)('h1, h2, h3, h4, h5, h6, p, img, ul');
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
        drops.push({
          template: 'ChImg',
          formData: {
            imgSrc: $(el).attr('src'), 
            imgWidth: 360,
            imgHeight: 240,
            imgAlt: $(el).attr('alt'),
            href: '',
            title: $(el).attr('alt'),
            titleStyle: 'inherit',
            align: 'center'
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
  return str.replace(/href=/ig, 'data-href=');
}

export default convert;