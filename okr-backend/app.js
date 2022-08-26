// 引入 koa 框架
const Koa = require('koa');
// 引入 路由
const router = require('./routes/api');
// 处理request过来的请求里面的数据
var koabody = require('koa-body');
// 引入koa-bodyparser中间件，这个中间件可以将post请求的参数转为json格式返回
const bodyParaser = require('koa-bodyparser');
//应用全局response中间件
const response = require('./middlewares/response');
//应用全局auth中间件
const auth = require('./middlewares/auth');
// 实例化应用
const app = new Koa();

var https = require('https');
var fs = require('fs');
var enforceHttps = require('koa-sslify').default;
app.use(enforceHttps());
var options = {
  key: fs.readFileSync('./ssl/zhengkunjin.key', 'utf8'),
  cert: fs.readFileSync('./ssl/zhengkunjin.crt', 'utf8')
}

// 使用路由，监听3000 端口
https.createServer(options, app.callback()).listen(3000);
app
  .use(koabody())
  .use(bodyParaser())
  .use(response)
  .use(auth)
  .use(router.routes())
  .use(router.allowedMethods())