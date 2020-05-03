const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
    let stime = new Date().getTime();
    await next();
    let etime = new Date().getTime();
    ctx.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
        'Content-Type': 'application/json;charset=utf-8',
    });

    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello world</h1>';
    console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`);
});
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});
