"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const videojuegos_1 = __importDefault(require("../interfaces/videojuegos"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO serach in DB fr all movies
    const videojuegos = yield videojuegos_1.default.find().exec();
    return res.status(200).json({
        message: "Videojuegos encontrado",
        data: videojuegos
    });
});
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO serach in DB fr all movies
    const id = req.params.id;
    const videojuego = yield videojuegos_1.default.findById(id).exec();
    return res.status(200).json({
        message: "Videojuego encontrado:",
        data: videojuego,
    });
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO storage movie into db
    const { title, year, duration } = req.body;
    if (title === '' || year === '' || duration === '' || !title || !year || !duration) {
        res.status(400).json({
            message: "Los parametros: titulo, año y duracion no deben esta vacios"
        });
        return;
    }
    const videojuego = new videojuegos_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title: title,
        year: year,
        duration: duration,
    });
    const result = yield videojuego.save();
    return res.status(201).json({
        message: "Videojuego agregado correctamente",
        data: {
            title,
            year,
            id: result.id,
        }
    });
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO find by id and update in db
    const id = req.params.id;
    const { title, year, duration } = req.body;
    if (title === '' || year === '' || duration === '' || !title || !year) {
        res.status(400).json({
            message: "Los parametros: ttulo, año y duracion no pueden estar vacios."
        });
        return;
    }
    const videojuego = yield videojuegos_1.default.findById(id).exec();
    if (!videojuego) {
        res.status(400).json({
            message: "El videojuego que quieres actualizar no existe"
        });
        return;
    }
    videojuego.title = title;
    videojuego.year = year;
    videojuego.duration = duration;
    yield videojuego.save();
    return res.status(200).json({
        message: "Videojuego actualizado correctamente :)",
        data: videojuego
    });
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO find by id and update in db
    const id = req.params.id;
    yield videojuegos_1.default.findByIdAndRemove(id).exec();
    return res.status(200).json({
        message: "Videojuego borrado correctamente",
    });
});
exports.default = { getAll, get, create, update, remove };
