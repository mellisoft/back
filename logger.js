const {createLogger, format, transports} = require('winston');
const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            level:'warn',
            filename:'public/logsWarnings.log'
        }),
        new transports.File({
            level:'error',
            filename:'public/logsErrors.log'
        })
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.metadata(),
        format.prettyPrint()
    )
});
module.exports = logger;