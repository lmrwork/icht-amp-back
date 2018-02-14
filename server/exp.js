var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var ejs = require('ejs')
var fs = require("fs")
var app = express()
var amp_cache_path = path.join(__dirname, 'amp_cache')

//cors
app.use(cors());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

app.engine('.html', ejs.__express)
app.set('views',path.join(__dirname , 'views'))
app.set('view engine', 'html'); 

app.post('/', (req, res) => {
  //console.log(req.body.html);
  var page = res.render('amp', { html: req.body.html }, (err, text) => {
    if (err) {
      res.send({err})
    } else {
      var cache_file = 'test.html'
      var cache_file_path = path.join(amp_cache_path, cache_file)
      fs.writeFileSync(cache_file, text)
      res.send(text)
    }
  })
})


app.listen(3001)
