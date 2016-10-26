const typeDefinitions = `
type WorldCupFinal {
  year: Int
  winner: String
  loser: String
  score: String
}
type RootQuery {
  worldCupFinal(year: Int, winner: String, loser: String, score: String): WorldCupFinal
}
schema {
  query: RootQuery
}
`;

module.exports = [typeDefinitions];

// http://graphql.org/learn/schema/#type-language