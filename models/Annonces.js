const mongoose = require("mongoose");
const { Schema } = mongoose;

const annonceSchema = new mongoose.Schema({
  titre: String,
  prix: Number,
  description: String,
  localisation: {
    ville: String,
    codePostal: String,
  },
  caracteristiques: {
    chambre: Number,
    salleDeBain: Number,
    balcon: Boolean,
    jardin: Boolean,
    parking: Boolean,
  },
  date: { type: Date, default: Date.now },
});

const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;
