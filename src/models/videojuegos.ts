import { Document } from "mongoose";

export interface videojuego extends Document {
  title: string;
  year: number;
  duration: string;
}
