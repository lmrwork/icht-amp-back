const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());
app.use(koaBody());

const main = async (ctx) => {
  const body = ctx.request.body;
  ctx.body = body;
};

app.use(main);
app.listen(3001);