import userAuth from "./utils/userAuth";

const { ApolloServer } = require('apollo-server');
import 'graphql-import-node';
import * as typeDefs from "./schema/schema.graphql";
import resolvers from "./resolvers/resolver";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            authToken:
                req && req.headers.authorization
                    ? userAuth(req)
                    : null
        };
    }
});

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );