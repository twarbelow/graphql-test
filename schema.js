import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
  }

  enum Gender {
    Male
    Female
    Other
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