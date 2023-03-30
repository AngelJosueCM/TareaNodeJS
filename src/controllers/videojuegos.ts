import { Request, Response } from "express";
import mongoose from "mongoose";
import Videojuegos from "../interfaces/videojuegos";

const getAll = async (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  const videojuegos = await Videojuegos.find().exec();
  return res.status(200).json({
    message: "Videojuegos encontrado",
    data: videojuegos
  });
}

const get = async (req: Request, res: Response) => {
  // TODO serach in DB fr all movies
  const id = req.params.id;
  const videojuego = await Videojuegos.findById(id).exec();
  return res.status(200).json({
    message: "Videojuego encontrado:",
    data: videojuego,
  });
}

const create = async (req: Request, res: Response) => {
  // TODO storage movie into db
  const { title, year, duration } = req.body;
  if (title === '' || year === '' || duration === '' || !title || !year || !duration) {
    res.status(400).json({
      message: "Los parametros: titulo, año y duracion no deben esta vacios"
    });
    return;
  }

  const videojuego = new Videojuegos({
    _id: new mongoose.Types.ObjectId(),
    title: title,
    year: year,
    duration: duration,
  });


  const result = await videojuego.save();


  return res.status(201).json({
    message: "Videojuego agregado correctamente",
    data: {
      title,
      year,
      id: result.id,
    }
  });
}


const update = async (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  const { title, year, duration } = req.body;
  if (title === '' || year === '' || duration === '' || !title || !year) {
    res.status(400).json({
      message: "Los parametros: ttulo, año y duracion no pueden estar vacios."
    });
    return;
  }
  const videojuego= await Videojuegos.findById(id).exec();
  if (!videojuego) {
    res.status(400).json({
      message: "El videojuego que quieres actualizar no existe"
    });
    return;
  }
  videojuego.title = title;
  videojuego.year = year;
  videojuego.duration = duration;
  await videojuego.save();
  return res.status(200).json({
    message: "Videojuego actualizado correctamente :)",
    data: videojuego
  });
}

const remove = async (req: Request, res: Response) => {
  // TODO find by id and update in db
  const id = req.params.id;
  await Videojuegos.findByIdAndRemove(id).exec();
  return res.status(200).json({
    message: "Videojuego borrado correctamente",
  });
}

export default { getAll, get, create, update, remove };