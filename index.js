import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { router } from "./src/routes/users.js";

//express es un modulo que nos va a permitir conectarnos a un servidor
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

//MIDDELWARE
//este middleware se ejecuta para convertir el objeto json que estamos envia a mongo atlas a un objeto de javaScript
app.use(express.json());
//en este caso el middleware le antepone a la ruta el prefijo /api, es decir, que la ruta qudaria así: /api/entrada
app.use("/api", router);

//DEFINIENFO RUTAS
app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

//mongoDB conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error(err);
  });

// app.listen();
app.listen(port, () => {
  console.log("Server listen on port", port);
});

//nodemon me va apermitir reiniciar el servidor automaticamnete se presente un cambio
//mongoose me a a permitir conectar mi aplicación a mongoDB atlas
//dotenv crear variables de entorno personalizadas
//mongodb+srv://ManuDB:<password>@cluster0.u428ldc.mongodb.net/ManuDB?retryWrites=true&w=majority
