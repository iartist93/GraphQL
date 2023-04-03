const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    totalDays: Int!
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
