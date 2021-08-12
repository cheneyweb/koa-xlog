const log = require("tracer").console();

module.exports = function (logConfig = {}, logProcess) {
  logConfig = logConfig || {};

  return function xlog(ctx, next) {
    // 日志内容

    const logData = {
      BODY: undefined,
      header: undefined,
    };

    if (ctx.method != "GET") {
      logData.BODY = ctx.request.body;
    }

    if (
      logConfig.header &&
      logConfig.header.loglist &&
      logConfig.header.loglist.length > 0
    ) {
      logData.header = {};
      for (let item of logConfig.header.loglist) {
        logData.header[item] = ctx.request.header[item];
      }
    } else if (logConfig.header) {
      logData.header = ctx.request.header;
    }

    log.debug(ctx.method, `${ctx.header.host}${ctx.url}`, logData);

    if (logProcess) {
      logProcess(ctx);
    }

    return next();
  };
};
