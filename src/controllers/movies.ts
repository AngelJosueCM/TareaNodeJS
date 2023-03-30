import { Request, Response } from "express";

const getAll = (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  return res.status(200).json({
    data: []
  });
}

const get = (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  const id = req.params.id;
  return res.status(200).json({
    data: {}
  });
}

const create = (req: Request, res: Response) => {
  // TODO storage movie into db
  const { title, year } = req.body;
  return res.status(200).json({
    data: {}
  });
}

const update = (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  const { title, year } = req.body;
  return res.status(200).json({
    data: {}
  });
}

const remove = (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  const { title, year } = req.body;
  return res.status(200).json({
    data: {}
  });
}

export default { getAll, get, create, update, remove };