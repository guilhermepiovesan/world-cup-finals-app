const WorldCupFinalModel = require('./model');

class WorldCupFinal {
  constructor() {
    this.findWorldCupFinal = (year) => {
      const final = WorldCupFinalModel.findOne({ year }, (error, data) => {
        return data;
      });
      return final;
    };
  }
}

module.exports = { WorldCupFinal };