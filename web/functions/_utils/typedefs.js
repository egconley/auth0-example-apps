const { gql } = require("apollo-server-lambda");

module.exports = gql`
    type App {
        _id: ID!
        name: String!
        description: String!
        stack: Stack!
        url: String!
        screenshot: String!
        deploy: String!
        quickstart: String!
    }

    type Stack {
        name: String!
        url: String!
    }
    
    type Query {
        app(_id: ID!): App
        apps: [App!]!
    }

    input StackInput {
        name: String!
        url: String!
    }

    input AppInput {
        name: String!
        description: String!
        stack: StackInput!
        url: String!
        screenshot: String!
        deploy: String!
        quickstart: String!
    }
    
    type Mutation {
        createApp(name: String!,
        description: String!,
        stack: StackInput!,
        url: String!,
        screenshot: String!,
        deploy: String!,
        quickstart: String!): App!
        updateApp(_id: ID!, input: AppInput!): App!
    }
`;
