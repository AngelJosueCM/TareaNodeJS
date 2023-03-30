"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("../controllers/movies"));
const router = express_1.default.Router();
router
    .get('/movies', movies_1.default.getAll)
    .get('/moies/:id', movies_1.default.get)
    .post('/movies', movies_1.default.create)
    .patch('/movies/:id', movies_1.default.update)
    .delete('/movies/:id', movies_1.default.remove);
module.exports = router;
