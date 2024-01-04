import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

// TODO -> Configurar Appolo
export default () => {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  )
}