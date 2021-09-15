import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { 
  Box,
  Center
 } from "@chakra-ui/react";

import { PokemonContainer } from "./containers/PokemonContainer"


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app',
    cache: new InMemoryCache()
  });

  return (
      <ApolloProvider client={client}>
        <main>
          <Center bg="tomato" h="100px" color="white">
            <h1>Pokedex</h1>
          </Center>
          <PokemonContainer />
        </main>
      </ApolloProvider>
  );

};

export default App;
