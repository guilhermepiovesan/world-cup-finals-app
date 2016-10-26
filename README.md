# World Cup Finals APP

A project to list FIFA World Cup Finals.
The application has two parts:
* **Server**: NodeJS + Express + Apollo Server + GraphQL + Mongoose + MongoDB.
* **Client**: React Native + Apollo Client

## Setup

Clone this repo:
```
git clone https://github.com/guilhermepiovesan/world-cup-finals-app.git
```

### Server Setup
Navigate into server folder:
```
cd server
```

Install dependencies:
```
yarn
```

## Usage

Start MongoDB Server:
```
mongod
```

Start project server:
```
node app.js
```

Open [GraphQL Explorer](http://localhost:8080/graphiql) on http://localhost:8080/graphiql

Try submitting a query:
```
query {
  worldCupFinal(year: 2002) {
    year
    winner
    loser
    score
  }
}
```