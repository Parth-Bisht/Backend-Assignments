const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/IMDB");

const MovieSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    releaseData: Date,
    earning: Number,
    cast: [String],
    language: String
})

const Movie = mongoose.model("movie",MovieSchema);
module.exports = {Movie, connection};