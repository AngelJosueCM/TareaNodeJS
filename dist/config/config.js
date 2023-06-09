"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
};
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || "3000";
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const SECRETS = {
    token: TOKEN_SECRET,
};
const config = {
    server: SERVER,
    secrets: SECRETS,
    mongo: MONGO,
};
exports.default = config;
