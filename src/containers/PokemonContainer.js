import {
    useQuery,
  } from "@apollo/client";

import { Pokemon } from "../components/Pokemon"
import { GET_POKEMONS } from "../graphql/get-pokemons"
import { css } from "@emotion/react";
import { 
    Container,
    Wrap,
    WrapItem,
    Center,
    Flex
 } from "@chakra-ui/layout";

export function PokemonContainer(){
    //get data
    const gqlVariables = {
        limit: 10,
        offset: 0,
    };
    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
      });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    // const pokemons = data['pokemons']['results']

    return(
        <>
        {/* <Container maxH='sm'> */}
            {data && (
                // <Container>                        
                    <Pokemon
                    pokemons={data.pokemons.results || []}
                    onLoadMore={() =>
                        fetchMore({
                        variables: {
                            limit: 10,
                            offset: data.pokemons.results.length
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return Object.assign({}, prev, {
                            pokemons: [...prev.chapters, ...fetchMoreResult.chapters]
                            });
                        }
                        })
                    }
                    />
                // </Container>
            )}
            {/* {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
        </>
    );
}