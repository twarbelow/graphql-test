import { Friends } from './dbConntectors';

// resolver map

export const resolvers = { 
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (root, {input}) => {
      const newFriend = new friendDatabase({
        firstName = input.firstName,
        lastName = input.lastName,
        gender = input.gender,
        email = input.email,
      });

      newFriend.id - newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) PromiseRejectionEvent(err)
          else resolve(newFriend)
        })
      })
    },
  },
};