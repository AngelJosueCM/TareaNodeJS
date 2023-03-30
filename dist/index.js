"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routs/users"));
// import moviesRoutes from './routs/movies';
const videojuegos_1 = __importDefault(require("./routs/videojuegos"));
const middleware_1 = __importDefault(require("./controllers/middleware"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    logger_1.default.info(`METHOD: [${req.method}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logger_1.default.info(`METHOD: [${req.method}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });
    next();
});
//TODO ADD valid routs here
app.use('/api', users_1.default);
app.use('/api', middleware_1.default.verifiedToken, videojuegos_1.default);
app.use((_, res) => {
    const error = new Error('NotFound');
    logger_1.default.error(error.message);
    res.status(404).json({ message: error.message });
});
app.listen(parseInt(config_1.default.server.port), () => {
    logger_1.default.info(`API is running in ${config_1.default.server.hostname} on port: ${config_1.default.server.port}`);
});
logger_1.default.error("Error");
logger_1.default.info("Info");
