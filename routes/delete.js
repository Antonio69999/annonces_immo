const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");
const mongoose = require("mongoose");

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  if (!mongoose.Types.ObjectId.isValid(request.params.id)) {
    return response
      .status(400)
      .json({ message: "Le format ID n'est pas celui utlisé par Mongoose" });
  }
  try {
    const deletedAnnonce = await Annonce.findByIdAndDelete(id);
    if (!deletedAnnonce) {
      return response
        .status(404)
        .json({ message: "Il n'y a pas d'annonces correspondant à cet id" });
    }
    response
      .status(200)
      .json({ message: "L'annonce a été supprimé avec succès" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
