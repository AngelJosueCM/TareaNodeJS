"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAll = (req, res) => {
    // TODO serach in DB fr all movies
    return res.status(200).json({
        data: []
    });
};
const get = (req, res) => {
    // TODO serach in DB fr all movies
    const id = req.params.id;
    return res.status(200).json({
        data: {}
    });
};
const create = (req, res) => {
    // TODO storage movie into db
    const { title, year } = req.body;
    return res.status(200).json({
        data: {}
    });
};
const update = (req, res) => {
    // TODO find by id and update in db
    const id = req.params.id;
    const { title, year } = req.body;
    return res.status(200).json({
        data: {}
    });
};
const remove = (req, res) => {
    // TODO find by id and update in db
    const id = req.params.id;
    const { title, year } = req.body;
    return res.status(200).json({
        data: {}
    });
};
exports.default = { getAll, get, create, update, remove };
