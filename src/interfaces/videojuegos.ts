import mongoose, { Schema } from "mongoose";
import { videojuego } from "../models/videojuegos";

const VideojuegosSchema: Schema = new Schema({
        title: {type: String, require: true},
        year: {type: Number, require: true},
        duration: {type: String, require: true}
},{
    timestamps: true
});

export default mongoose.model<videojuego>('Videojuego', VideojuegosSchema);