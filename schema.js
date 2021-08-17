import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }


  type Query {
    getFriend(id: ID): Friend
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers })

export { schema };