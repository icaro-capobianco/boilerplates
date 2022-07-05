import Koa from 'koa';

const app = new Koa();
app.use(ctx => {
  ctx.response.body = 'OK';
});
app.listen(3000);
