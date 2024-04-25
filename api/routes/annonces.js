const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");
const mongoose = require("mongoose");

router.get("/", async (request, response) => {
  try {
    const annonces = await Annonce.find();
    response.json(annonces);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ message: "Le format ID n'est pas celui utlisé par Mongoose" });
    }
    const annonce = await Annonce.findById(req.params.id);
    if (!annonce) {
      return res
        .status(404)
        .json({ message: "Il n'y a pas d'annonces correspondant à cet id" });
    }
    response.json(annonce);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
