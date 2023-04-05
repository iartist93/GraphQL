/**
 *
 * Testing Apollo-Server application
 *
 */

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # scaler type
  scalar Date

  # object type
  """
  Documentations for the SkiDay should be here ...
  """
  type SkiDay {
    "ID of of the ski day"
    id: ID!
    date: Date!
    road: String!
    "Condition of the skiday"
    conditions: Conditions
  }

  # enum type
  enum Conditions {
    POWDER
    HEAVY
    ICE
    THIN
  }

  # wrapper for all queries types
  type Query {
    totalDays: Int!
    allDays: [SkiDay!]! # can accept empty array, but can't be null
  }

  # input type
  input AddDayInput {
    date: Date!
    road: String!
    conditions: Conditions
  }

  # return object - add/delete fields from SkiDay
  type RemoveDayPayload {
    id: ID!
    date: Date!
    road: String!
    conditions: Conditions
    removed: Boolean
    totalBefore: Int
    totalAfter: Int
  }

  type Mutation {
    removeDay(id: ID!): SkiDay!
    addDay(input: AddDayInput!): RemoveDayPayload
  }

  type Subscription {
    newDay: SkiDay!
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

const mocks = {
  Date: () => '11/11/2011',
  Email: () => 'test@gmail.com',
  Query: () => ({
    allDays: () => [...new Array(8)],
  }),
};

const server = new ApolloServer({
  typeDefs,
  //   mocks: true, // mock data from the schema
  mocks,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
