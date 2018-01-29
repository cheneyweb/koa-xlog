const log = require('tracer').colorConsole()

module.exports = function (logConfig = {}, logProcess) {
    logConfig = logConfig || {}
    return function xauth(ctx, next) {
        log.info(ctx.method, `${ctx.header.host}${ctx.url}`)
        if (ctx.method != 'GET') {
            log.info('BODY', ctx.request.body)
        }
        if (logConfig.header && logConfig.header.loglist && logConfig.header.loglist.length > 0) {
            for (let item of logConfig.header.loglist) {
                log.info('HEADER.' + item, ctx.request.header[item])
            }
        } else if (logConfig.header) {
            log.info('HEADER', ctx.request.header)
        }
        if (logProcess) {
            logProcess(ctx)
        }
        return next()
    }
}