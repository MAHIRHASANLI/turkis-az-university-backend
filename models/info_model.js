const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
     category: {
          type: String,
          required: true
     },
     title: {
          type: String,
          require: true
     },
     description: {
          type: String,
          require: true
     },
     date: {
          type: String,
          require: true
     },
     images: {
          type: [String],
          require: false
     },
});

const InfoModel = mongoose.models.Informations || new mongoose.model("Informations", InfoSchema);

module.exports = InfoModel;