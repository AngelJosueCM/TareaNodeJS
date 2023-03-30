"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const verifiedToken = (req, res, next) => {
    try {
        const authorization = req.header('authorization');
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        jsonwebtoken_1.default.verify(token, config_1.default.secrets.token);
        next();
    }
    catch (e) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};
exports.default = { verifiedToken };
