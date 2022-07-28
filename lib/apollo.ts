import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://flashcards-graphql-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
