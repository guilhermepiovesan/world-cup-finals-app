const resolveFunctions = {
  RootQuery: {
    worldCupFinal(_, { year }, context) {
      const worldCupFinal = new context.constructor.WorldCupFinal();
      return worldCupFinal.findWorldCupFinal(year);
    },
  },
};

module.exports = resolveFunctions;