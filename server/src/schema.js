const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
  }
  type Gym {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input CreateGymInput {
    name: String
    type: String
  }

  type Query {
    gyms: [Gym]!
  }
  type Mutation {
    createGym(input: CreateGymInput): Gym!
  }
`;

module.exports = typeDefs;
