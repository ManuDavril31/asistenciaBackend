import mongoose from "mongoose";

//Esquema de entrada
const entrySchema = mongoose.Schema({
  fecha: {
    type: String,
    require: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  cargo: {
    type: String,
    require: true,
  },
  cedula: {
    type: Number,
    require: true,
  },
  horaEntrada: {
    type: String,
    require: true,
  },
  dineroEntrada: {
    type: Number,
    require: true,
  },
  firmaEntrada: {
    type: String,
    require: true,
  },
  observaciones: {
    type: String,
  },
  horaSalida: {
    type: String,
  },
  dineroSalida: {
    type: Number,
  },
  firmaSalida: {
    type: String,
  },
});

//Exportamos el modelo de la estructura de una entrada con el nombre "Entrada" y le pasamos el Schema
export default mongoose.model("EntryPost", entrySchema);
