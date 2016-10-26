const Mongoose = require('mongoose');

const WorldCupFinalSchema = Mongoose.Schema({
  year: Number,
  winner: String,
  loser: String,
  score: String,
});

const WorldCupFinal = Mongoose.model('WorldCupFinal', WorldCupFinalSchema);

module.exports = WorldCupFinal;