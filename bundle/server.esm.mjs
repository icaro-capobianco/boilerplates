import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';

const app = new Koa();
const cwd = process.cwd();
const dist = path.join(cwd, '/build/dist/');
app.use(serve(dist));
app.listen(3000, () => console.log('https://localhost:3000'));
