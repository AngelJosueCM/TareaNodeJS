"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (message, object) => {
    if (object) {
        console.info(colors_1.default.yellow(`[${getTimeStamp()}] [INFO] [${message}]`), object);
    }
    else {
        console.info(colors_1.default.yellow(`[${getTimeStamp()}] [INFO] [${message}]`));
    }
};
const error = (message, object) => {
    if (object) {
        console.info(colors_1.default.red(`[${getTimeStamp()}] [ERROR] [${message}]`), object);
    }
    else {
        console.info(colors_1.default.red(`[${getTimeStamp()}] [ERROR] [${message}]`));
    }
};
exports.default = { info, error };
