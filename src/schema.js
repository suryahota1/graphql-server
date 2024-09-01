export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!,
        content: String!
    }

    type Author {
        id: ID!
        name: String!,
        verified: Boolean!
    }

    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }

    type Mutation {
        addGame(input: AddGameInput!): Game,
        deleteGame(id: ID!): [Game],
        updateGame(id: ID!, edits: EditGameInput!): Game
    }

    input AddGameInput {
        title: String!, 
        platform: [String!]!
    }

    input EditGameInput {
        title: String, 
        platform: [String!]
    }
`;