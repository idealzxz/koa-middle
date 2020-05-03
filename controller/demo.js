const Koa = require('koa');
const app = new Koa();
// logger

app.use(async (ctx, next) => {
    console.log('------log-----1');
    await next();
    console.log('------log-----2');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    console.log('------x-response-time-----1');
    await next();
    console.log('------x-response-time-----2');

    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async (ctx) => {
    console.log('------response-----1');

    ctx.body = 'Hello World';
});

app.listen(9090);
