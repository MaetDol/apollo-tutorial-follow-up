const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const mocks = require('./mocks');

const server = new ApolloServer({ typeDefs, mocks });
server
  .listen()
  .then(() => console.log(`Server is running on port 4000(maybe)`));
