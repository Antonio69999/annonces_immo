const express = require("express");
const router = express.Router();
const Annonce = require("../models/Annonces");
const mongoose = require("mongoose");

// require("dotenv").config({ path: ".env.local" });
// const secret = process.env.JWT_SECRET;

// const { expressjwt: jwt } = require("express-jwt");
// router.use(
//   jwt({ secret: secret, algorithms: ["HS256"] }).unless({
//     path: ["/annonces"],
//   })
// );

router.get("/", async (request, response) => {
  try {
    const annonces = await Annonce.find();
    response.json(annonces);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.categoryId)) {
      return res
        .status(400)
        .json({ message: "Le format ID n'est pas celui utlisé par Mongoose" });
    }
    const annonces = await Annonce.find({
      category: req.params.categoryId,
    }).populate("category");
    if (!annonces) {
      return res
        .status(404)
        .json({
          message:
            "Il n'y a pas d'annonces correspondant à cet id de catégorie",
        });
    }
    res.json(annonces);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
