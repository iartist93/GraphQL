/**
 *
 * Testing Apollo-Server application
 *
 */

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type RunningDay {
    id: ID!
    date: String!
    road: String!
  }

  type Query {
    totalDays: Int!
    allDays: [RunningDay!]! # can accept empty array, but can't be null
  }
`;

/**
 *
 * Function
 * Response to the incoming query, what to return to the query/request?
 *
 * mocks: true => will return fake generated data for us, without using resolvers
 */
const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  mocks: true, // mock data from the schema
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
