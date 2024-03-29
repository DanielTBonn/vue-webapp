const typeDefs = `

    type User {
        _id: ID!
        username: String!
        password: String!
        SavedItems: [SavedItem]
    }

    type SavedItem {
        _id: ID!
        itemId: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addSavedItem(itemId: String!): SavedItem
    }
`

module.exports = typeDefs;