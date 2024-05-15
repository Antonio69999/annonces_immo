const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = require("../models/Categories");

// require("dotenv").config({ path: ".env.local" });
// const secret = process.env.JWT_SECRET;

// const { expressjwt: jwt } = require("express-jwt");
// router.use(
//   jwt({ secret: secret, algorithms: ["HS256"] }).unless({
//     path: ["/annonces"],
//   })
// );

router.get("/", async (req, response) => {
  try {
    const categories = await Category.find();
    response.json(categories);
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
    const categories = await Category.findById(req.params.id);
    if (!categories) {
      return res
        .status(404)
        .json({ message: "Il n'y a pas d'annonces correspondant à cet id" });
    }
    response.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
