import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import client from "./src/services/client";

// TODO -> Configurar Appolo
export default () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  )
}