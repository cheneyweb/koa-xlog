// 系统配置参数
const config = require('config')
const port = config.server.port
// 应用服务相关
const Koa = require('koa')
const koaBody = require('koa-body')
const xlog = require(__dirname + '/xlog_modules/koa-xlog/index.js')
// 日志相关
const log = require('tracer').colorConsole({ level: config.log.level })
// 路由相关
const Router = require('koa-router')
const router = new Router()

// 初始化应用服务
const app = new Koa()
app.use(koaBody())
app.use(xlog(config.log, (ctx) => { log.info('异步日志处理', ctx.request.body) }))
app.use(router.routes())

// 1、GET日志
router.get('/test', async function (ctx, next) {
    ctx.body = 'hello'
})
// 2、POST日志
router.post('/test', async function (ctx, next) {
    ctx.body = ctx.request.body
})

// 启动应用服务
app.listen(port)
log.info(`XLog服务启动【执行环境:${process.env.NODE_ENV},端口:${port}】`)
log.info(`GET日志路径 【GET】【localhost:${port}/test】`)
log.info(`POST日志路径【POST】【localhost:${port}/test】`)