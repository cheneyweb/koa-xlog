# koa-xauth
Node后端微服务框架，基于koa-xlog中间件，异步日志

[传送门：XServer官网文档](http://www.xserver.top)

框架目录结构
>
    ├── app.js
    ├── config
    │   ├── default.json
    │   ├── develop.json
    │   └── production.json
    ├── node_modules
    ├── package.json
    └── xlog_modules
        └── koa-xlog

快速上手
>
    1、const xauth = require('koa-xlog')
    2、app.use(xlog())

帮助联系
>
	作者:cheneyxu
	邮箱:457299596@qq.com
	QQ:457299596

更新日志
>
	2017.12.09:初版
    2017.12.10:精简内部配置
    2018.01.29:更新依赖