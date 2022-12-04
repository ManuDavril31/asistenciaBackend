import express from "express";
import entrySchema from "../models/entrada.js";

export const router = express.Router();

//Registrando entrada
router.post("/entrada", (req, res) => {
  //   res.send("create entrada");
  //req.body va a traer los datos con los cuales queremos crear esa nueva entrada
  const infoEntry = entrySchema(req.body);
  infoEntry
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//OBTENER TODAS LA ENTRADAS DEL DIA
router.get("/entrada", (req, res) => {
  entrySchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//OBTENER UNA ENTRADA EN ESPECIFICO

router.get("/entrada/:id", (req, res) => {
  const { id } = req.params;
  entrySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE UNA ENTRADA EN ESPECIFICO
router.put("/entrada/:id", (req, res) => {
  const { id } = req.params;
  const { observaciones, horaSalida, dineroSalida, firmaSalida } = req.body;
  entrySchema
    .updateOne(
      { _id: id },
      { $set: { observaciones, horaSalida, dineroSalida, firmaSalida } }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE ENTRADA
router.delete("/entrada/:d", (req, res) => {
  const { id } = req.params;
  entrySchema
    .deleteOne(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});
