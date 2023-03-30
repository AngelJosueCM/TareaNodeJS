import mongoose, { Schema } from "mongoose";
import { Videojuego } from "../models/videojuegos";

const VideojuegosSchema: Schema = new Schema({
        title: {type: String, require: true},
        year: {type: Number, require: true},
        duration: {type: String, require: true}
},{
    timestamps: true
});

export default mongoose.model<Videojuego>('Videojuego', VideojuegosSchema);