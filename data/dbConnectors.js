import mongoose from 'mongoose';

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const friendsSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});

const Friends = mongoose.model('friends', friendsSchema)

export { Friends};