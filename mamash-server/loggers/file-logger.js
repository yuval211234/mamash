const appRoot = require('app-root-path');
const winston = require('winston');

const options = {
  file: {
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    colorize: false,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
  ],
  exitOnError: false,
});

module.exports = logger;