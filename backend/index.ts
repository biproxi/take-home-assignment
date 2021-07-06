import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import { TodosResolver } from './src/resolvers/todosResolver';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || '';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [TodosResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
    validate: false,
  });

  const mongoose = await connect(databaseURL, { useNewUrlParser: true });

  await mongoose.connection;

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  const app = Express();

  server.applyMiddleware({ app });

  app.listen({ port: 8080 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:8080${server.graphqlPath}`
    )
  );
};

main().catch(error => {
  console.log('Error: ', error);
});
