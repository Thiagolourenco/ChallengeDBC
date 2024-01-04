import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import Home from "./src/pages/Home";

// TODO -> Configurar Appolo
export default () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}