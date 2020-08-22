"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
    ],
    exitOnError: false,
});
