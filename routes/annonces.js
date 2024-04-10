const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");
const mongoose = require("mongoose");

router.get("/", async (request, response) => {
  const Annonce1 = new Annonce({
    titre: "Test titre",
    prix: 100,
    description: "Test description",
    localisation: {
      ville: "Lyon",
      codePostal: "69000",
    },
    caractéristiques: {
      chambre: 2,
      salleDeBain: 1,
      balcon: true,
      jardin: false,
      parking: true,
    },
  });

  const Annonce2 = new Annonce({
    titre: "Test titre 2",
    prix: 200,
    description: "Test description 2",
    localisation: {
      ville: "Paris",
      codePostal: "75000",
    },
    caractéristiques: {
      chambre: 3,
      salleDeBain: 2,
      balcon: false,
      jardin: true,
      parking: false,
    },
  });

  try {
    const firstAnnonce = await Annonce1.save();
    const secondAnnonce = await Annonce2.save();
    response.json([firstAnnonce, secondAnnonce]);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Le format ID n'est pas celui utlisé par Mongoose" });
  }
  try {
    const annonce = await Annonce.findById(req.params.id);
    if (!annonce) {
      return res
        .status(404)
        .json({ message: "Il n'y a pas d'annonces correspondant à cet id" });
    }
    res.json(annonce);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
