const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  plot:  { type: String },
  year:  { type: String},
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
