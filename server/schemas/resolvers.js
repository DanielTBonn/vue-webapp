const { User } = require('../models');
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
    },
    Mutation: {
        login: async(parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
        }
    }
}