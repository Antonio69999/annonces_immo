const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");

router.get("/", async (request, response) => {
  const Annonce1 = new Annonce({
    titre: "Test titre",
    prix: 100,
    description: "Test description",
    localisation: "Test localisation",
    jardin: true,
  });

  const Annonce2 = new Annonce({
    titre: "Test titre 2",
    prix: 200,
    description: "Test description 2",
    localisation: "Test localisation 2",
    jardin: false,
  });

  try {
    const firstAnnonce = await Annonce1.save();
    const secondAnnonce = await Annonce2.save();
    response.json([firstAnnonce, secondAnnonce]);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

module.exports = router;
