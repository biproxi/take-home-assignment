import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient =  new ApolloClient({ 
  cache: new InMemoryCache({
    typePolicies: {
      Todo: { 
        keyFields: ['id'],
      },
    },
  }),
  uri: 'http://localhost:8080/graphql',
});