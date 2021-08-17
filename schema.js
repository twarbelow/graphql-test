import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
  }


  type Query {
    getFriend(id: ID): Friend
  }

  type FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
    age: Int
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`)

export default schema;