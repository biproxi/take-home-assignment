import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import {TodoResolver} from "./resolvers/TodoResolver";
import {buildSchema} from "type-graphql";

async function main() {
    const connection = await createConnection()
    const schema = await buildSchema({
        resolvers: [TodoResolver]
    })
    const server = new ApolloServer({ schema })
    await server.listen(4000)
    console.log("Server has started!")
}

main();