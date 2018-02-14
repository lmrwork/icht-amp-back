const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(cors());
app.use(bodyParser());

const main = async (ctx) => {
  const body = ctx.request.body;
  ctx.body = body;
};

app.use(main);
app.listen(3001);