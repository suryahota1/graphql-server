import db from "./db.js"

export const resolvers = {
    Query: {
        reviews: () => db.reviews, 
        authors: () => db.authors, 
        games: () => db.games
    },
    Mutation: {
        addGame ( _, args ) {
            const newGame = {
                id: db.games.length, 
                ...args.input
            };
            db.games.push(newGame);
            return newGame;
        }, 
        deleteGame( _, args ) {
            db.games = db.games.filter(game => game.id !== args.id);
            return db.games;
        },
        updateGame( _, args ) {
            db.games = db.games.map(game => {
                if ( game.id !== args.id ) return game;
                return {
                    ...game, 
                    ...args.edits
                };
            });

            return db.games.find(game => game.id === args.id);
        }
    }
}