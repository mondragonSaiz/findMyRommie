const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(
            'No user found with this email address'
          );
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw err;
      }
    },
    addUser: async (
      parent,
      { username, firstName, lastName, email, password }
    ) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new AuthenticationError('Email already in use');
        }
        const user = await User.create({
          username,
          firstName,
          lastName,
          email,
          password,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolvers;
