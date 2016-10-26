const request = require('request-promise');
const WorldCupFinal = require('./model');

const seed = () => {
  request('https://mysafeinfo.com/api/data?list=fifachamptions_mensoccer&format=json')
    .then(res => JSON.parse(res))
    .then((res) => {
      const data = responseToSchema(res);
      populateDatabase(data);
    })
    .catch((err) => {
      console.log('err:', err);
    });
};

function responseToSchema(res) {
  return res.map((r) => {
    const obj = {};
    obj.year = r.yr;
    obj.winner = r.winner;
    obj.loser = r.loser;
    obj.score = r.sc;
    return obj;
  })
};

function populateDatabase(data) {
  data.forEach((d) => {
    const final = new WorldCupFinal(d);
    final.save((err, item) => {
      console.log('saved:', item);
    });
  })
};

module.exports = seed;