const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");


router.post("/", async (request, response) => {
  const annonce = new Annonce({
    titre: request.body.titre,
    prix: request.body.prix,
    description: request.body.description,
    localisation: {
      ville: request.body.localisation.ville,
      codePostal: request.body.localisation.codePostal,
    },
    caracteristiques: {
      chambre: request.body.caracteristiques.chambre,
      salleDeBain: request.body.caracteristiques.salleDeBain,
      balcon: request.body.caracteristiques.balcon,
      jardin: request.body.caracteristiques.jardin,
      parking: request.body.caracteristiques.parking,
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
