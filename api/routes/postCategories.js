const express = require("express");
const router = express.Router();
const Category = require("../models/Categories");

router.post("/", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    logo: req.body.logo,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
