/* eslint-disable no-nested-ternary */
import { Container, Grid, MotionListItem } from "./PokemonList.styles";
import PokemonThumbnail from "../PokemonThumbnail/PokemonThumbnail";
import PokemonNotFound from "../PokemonNotFound/PokemonNotFound";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -150 },
};

const PokemonList = ({ pokemons, filteredPokemons, typeNotFound, search }) => {
  return (
    <Container>
      {filteredPokemons.length > 0 ? (
        <Grid initial="hidden" animate="visible" variants={list}>
          {filteredPokemons
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
      ) : typeNotFound ? (
        <PokemonNotFound />
      ) : (
        <Grid initial="hidden" animate="visible" variants={list}>
          {pokemons
            .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
            .map((pokemon) => (
              <MotionListItem variants={items} key={pokemon.id}>
                <PokemonThumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image={
                    pokemon.sprites.other.dream_world.front_default === null
                      ? pokemon.sprites.other["official-artwork"].front_default
                      : pokemon.sprites.other.dream_world.front_default
                  }
                  types={pokemon.types}
                />
              </MotionListItem>
            ))}
        </Grid>
      )}
    </Container>
  );
};

export default PokemonList;
