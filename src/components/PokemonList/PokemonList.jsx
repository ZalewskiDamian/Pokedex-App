import { Grid } from "./PokemonList.styles";
import PokemonThumbnail from "../PokemonThumbnail/PokemonThumbnail";

const PokemonList = ({ pokemons, filteredPokemons, search }) => {
  return (
    <Grid>
      {filteredPokemons.length > 0
        ? filteredPokemons
            .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
            .map((pokemon) => (
              <PokemonThumbnail
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={
                  pokemon.sprites.other.dream_world.front_default === null
                    ? pokemon.sprites.other["official-artwork"].front_default
                    : pokemon.sprites.other.dream_world.front_default
                }
                types={pokemon.types}
              />
            ))
        : pokemons
            .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
            .map((pokemon) => (
              <PokemonThumbnail
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={
                  pokemon.sprites.other.dream_world.front_default === null
                    ? pokemon.sprites.other["official-artwork"].front_default
                    : pokemon.sprites.other.dream_world.front_default
                }
                types={pokemon.types}
              />
            ))}
    </Grid>
  );
};

export default PokemonList;
