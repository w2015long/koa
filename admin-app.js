const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();

app.use(koaStatic('F:/web/admin-ark'));

app.listen(30008);

console.log('admin-app start at 30008');