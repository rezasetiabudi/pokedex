import { Container, 
    Box, 
    Grid, 
    GridItem,
    Image
 } from "@chakra-ui/react";
import PokemonDetail from "./PokemonDetail";

 
//handler
const handleScroll = ({ currentTarget }, onLoadMore) => {
    if (
        currentTarget.scrollTop + currentTarget.clientHeight >=
        currentTarget.scrollHeight
    ) {
        onLoadMore();
    }
};


export function Pokemon({ pokemons, onLoadMore }) {
    return(
        <>
        {/* <Container 
        backgroundColor="green"
        onScroll={e => handleScroll(e, onLoadMore)}> */}
            {pokemons.map(p => 
                <PokemonDetail pokemon={p}/> 
            )}               
        {/* </Container> */}
        </>
    )
}