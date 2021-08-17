import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
import { test } from 'media-typer';

const app = express();

app.get('/', (req, res) => {
  res.send('Graphql is amazing!');
});

const friendDatabase = {};

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
  }
}

const root = { 
  friend: () => {
  return {
    "id": 135245342,
    "firstName": "Taija",
    "lastName": "Warbelow",
    "gender": "female",
    "email": "test@test.com"
  }
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'))