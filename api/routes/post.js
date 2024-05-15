const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");

router.post("/", async (request, response) => {
  const annonce = new Annonce({
    titre: request.body.titre,
    prix: request.body.prix,
    description: request.body.description,
    category: request.body.category,
    images: request.body.images,
    localisation: {
      ville: request.body.localisation.ville,
      codePostal: request.body.localisation.codePostal,
    },
    caractéristiques: {
      chambre: request.body.caractéristiques.chambre,
      salleDeBain: request.body.caractéristiques.salleDeBain,
      balcon: request.body.caractéristiques.balcon,
      jardin: request.body.caractéristiques.jardin,
      parking: request.body.caractéristiques.parking,
    },
  });
  try {
    const newAnnonce = await annonce.save();
    response.status(201).json({
      message: "Lannonce a bien été créée",
      newAnnonce,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({ message: "Données non valides" });
    }
    if (error.name === "MongoNetworkError") {
      return response
        .status(500)
        .json({ message: "Erreur de connexion à la base de données" });
    }
    if (error.name === "MongoError" && error.code === 11000) {
      return response.status(400).json({ message: "Données en double" });
    }
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
