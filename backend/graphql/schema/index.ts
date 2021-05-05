import { ApolloServer, gql } from 'apollo-server-express';
import express from "express"
import mongoose from "mongoose"
import {resolvers} from '../resolvers/rootResolver'
import {typeDefs} from '../typedefs/typedefs'

const startServer = async () => {
    const app = express();
    const uri = "mongodb://localhost:27017/biproxi-todo";


    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app })

    await mongoose.connect(uri, {useNewUrlParser: true})

    app.listen({port: 4020}, () => console.log(`Server ready at http://localhost:4020${server.graphqlPath}`))
}

startServer();