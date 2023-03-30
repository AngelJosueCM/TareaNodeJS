import { Document } from "mongoose";

export interface Videojuego extends Document {
  title: string;
  year: number;
  duration: string;
}
