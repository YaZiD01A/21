const {User} = require ("../models")
const {SignToken} = require("../utils/auth")
const {AuthenticationError} = require("apollo-server-express")
const { findOne } = require("../models/User")
const resolvers = {
    Query: {
        me: async (parent,agrs,context) {
            const userInfo = await User findOne({_id: context.user._id}).select('-__v -password')
            return userInfo
        }
    },
    Mutation: {

    }
}