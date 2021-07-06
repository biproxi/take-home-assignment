import express from "express"
import { graphqlHTTP } from "express-graphql";
import { schema } from "../graphql/schema";
import { root } from "../graphql/root";

const graphql = express.Router();

graphql.all('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

export default graphql
