const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");
const mongoose = require("mongoose");

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  const newData = request.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
      return response
        .status(400)
        .json({ message: "Le format ID n'est pas celui utlisé par Mongoose" });
    }
    const updatedAnnonce = await Annonce.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updatedAnnonce) {
      return response
        .status(404)
        .json({ message: "Il n'y a pas d'annonces correspondant à cet id" });
    }
    response.json(updatedAnnonce);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
