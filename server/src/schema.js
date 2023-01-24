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

  type Instructor {
    id: ID!
    createdAt: String!
    first_name: String!
    last_name: String!
  }

  input CreateGymInput {
    name: String
    type: String
  }

  input CreateInstructorInput {
    first_name: String
    last_name: String
  }

  type Query {
    gyms: [Gym]!
    instructors: [Instructor]!
  }
  type Mutation {
    createGym(input: CreateGymInput): Gym!
    createInstructor(input: CreateInstructorInput): Instructor!
  }
`;

module.exports = typeDefs;
