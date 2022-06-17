import { Grid } from "./PokemonList.styles";
import PokemonThumbnail from "../PokemonThumbnail/PokemonThumbnail";

const PokemonList = ({ pokemons }) => {
  return (
    <Grid>
      {pokemons
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((pokemon) => (
          <PokemonThumbnail
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            types={pokemon.types}
          />
        ))}
    </Grid>
  );
};

export default PokemonList;
