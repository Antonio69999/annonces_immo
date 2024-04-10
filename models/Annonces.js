const mongoose = require("mongoose");
const { Schema } = mongoose;

const annonceSchema = new mongoose.Schema({
  titre: String,
  prix: Number,
  description: String,
  localisation: String,
  date: { type: Date, default: Date.now },
  jardin: Boolean,
  
});

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;
