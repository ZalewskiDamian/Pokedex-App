/* eslint-disable no-nested-ternary */
import { motion } from "framer-motion";
import { Grid } from "./PokemonList.styles";
// import { listAnimation, cardAnimation } from "./PokemonList.data";
import PokemonThumbnail from "../PokemonThumbnail/PokemonThumbnail";

export const listAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.35,
      delayChildren: 0.75,
    },
  },
};
export const cardAnimation = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const PokemonList = ({ pokemons, filteredPokemons, typeNotFound, search }) => {
  return (
    <Grid initial="hidden" animate="visible" variants={listAnimation}>
      {filteredPokemons.length > 0 ? (
        filteredPokemons
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
      ) : typeNotFound ? (
        <p>nie ma typu</p>
      ) : (
        pokemons
          .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
          .map((pokemon) => (
            <motion.li variants={cardAnimation} key={pokemon.id}>
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
            </motion.li>
          ))
      )}
    </Grid>
  );
};

export default PokemonList;
