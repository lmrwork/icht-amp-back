const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const fs = require("fs");
const app = express();
const CleanCSS = require('clean-css');
const crypto = require('crypto'); //md5
const amphtmlValidator = require('amphtml-validator'); //valitator
const uncss = require('uncss'); //uncss

//cors
app.use(cors());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.engine('.html', ejs.__express);
app.set('views',path.join(__dirname , 'views'));
app.set('view engine', 'html'); 

const amp_cache_path = path.join(__dirname, 'amp_cache');
app.use('/amp_cache', express.static(amp_cache_path));
const amp_release = path.join(__dirname, '../build');
app.use('/release', express.static(amp_release));

app.post('/', (req, res) => {
  //get css
  const items = JSON.parse(req.body.items);
  let css = fs.readFileSync('./src/css/widget/Amp.css');
  css += "\n\r"+fs.readFileSync('./src/css/widget/ChBanner.css');
  items.forEach( i => {
    try {
      css += "\n\r"+fs.readFileSync(`./src/css/widget/${i.template}.css`);
    } catch(e) {
      //console.log(e);
    }
  })
  css += "\n\r"+fs.readFileSync('./src/css/widget/Global.css');
  css += "\n\r"+fs.readFileSync('./src/css/widget/BannerFixd.css');
  css = new CleanCSS({level:2}).minify(css).styles;
  //amp script src
  let script = `
  <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
  <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
  `;
  if (req.body.html.indexOf('amp-carousel') !== -1) {
    script = script + `<script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>`;
  }

  //console.log(req.body.html);
  const page = res.render('amp', { html: req.body.html, css: css, script: script, schema: req.body.schema }, (err, text) => {
    if (err) {
      res.send({err});
    } else {
      let md5 = crypto.createHash('md5');
      let cache_file = `test-${md5.update(req.ip).digest('hex')}.html`;
      let cache_file_path = path.join(amp_cache_path, cache_file);
      //TODO: unuse css
      uncss(text, {raw: css, ignoreSheets: [/fonts.googleapis/], ignore: [/expanded/]}, function (error, output) {
        text = text.replace(/<style amp-custom="">(.*?)<\/style>/, `<style amp-custom="">${output}</style>`);
        //write amphtml
        fs.writeFileSync(cache_file_path, text);
        //validator
        let check = {status:'PASS', message:'恭喜，已移除未使用的 CSS，并通过 AMP-HTML 代码验证！'};
        amphtmlValidator.getInstance().then(function (validator) {
          var input = fs.readFileSync(cache_file_path, 'utf8');
          var result = validator.validateString(input);
          if (result.status === 'PASS') {
            check.status = 'PASS';
          } else {
            check.status = 'EROOR';
            check.message = '';
          }
          for (var ii = 0; ii < result.errors.length; ii++) {
            var error = result.errors[ii];
            check.message += '<p> line ' + error.line + ', col ' + error.col + ': ' + error.message + ' See it! <em>' + error.specUrl + '</em></p>';
          }
          //return api result
          res.send({
            succ: `http://${req.hostname}:3733/amp_cache/${cache_file}`,
            css: output,
            script: script,
            validator: check,
            uncsserror: error
          })
        })
      });
    }
  })
})

app.listen(3733)
