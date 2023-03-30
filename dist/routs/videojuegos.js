"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const videojuegos_1 = __importDefault(require("../controllers/videojuegos"));
const router = express_1.default.Router();
router
    .get('/videojuegos', videojuegos_1.default.getAll)
    .get('videojuegos/:id', videojuegos_1.default.get)
    .post('/videojuegos', videojuegos_1.default.create)
    .patch('/videojuegos/:id', videojuegos_1.default.update)
    .delete('/videojuegos/:id', videojuegos_1.default.remove);
module.exports = router;
