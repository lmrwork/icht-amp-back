const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')
const fs = require("fs")
const app = express()
const CleanCSS = require('clean-css')
const crypto = require('crypto'); //md5

//cors
app.use(cors());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

app.engine('.html', ejs.__express)
app.set('views',path.join(__dirname , 'views'))
app.set('view engine', 'html'); 

const amp_cache_path = path.join(__dirname, 'amp_cache')
app.use('/amp_cache', express.static(amp_cache_path))

app.post('/', (req, res) => {
  //get css
  const items = JSON.parse(req.body.items);
  let css = fs.readFileSync('./src/css/widget/Amp.css')
  css += "\n\r"+fs.readFileSync('./src/css/widget/ChBanner.css')
  items.forEach( i => {
    try {
      css += "\n\r"+fs.readFileSync(`./src/css/widget/${i.template}.css`)
    } catch(e) {
      //console.log(e);
    }
  })
  css += "\n\r"+fs.readFileSync('./src/css/widget/Global.css')
  const opt1 = {level:2}
  css = new CleanCSS(opt1).minify(css).styles

  //console.log(req.body.html);
  const page = res.render('amp', { html: req.body.html, css: css }, (err, text) => {
    if (err) {
      res.send({err})
    } else {
      let md5 = crypto.createHash('md5');
      let cache_file = `test-${md5.update(req.ip).digest('hex')}.html`
      let cache_file_path = path.join(amp_cache_path, cache_file)
      fs.writeFileSync(cache_file_path, text)
      res.send({
        succ: `http://${req.hostname}:3001/amp_cache/${cache_file}`,
        css: css
      })
    }
  })
})

app.listen(3001)
