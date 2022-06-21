import { Routes, Route } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";
import Home from "../pages/Home/Home";
import Pokemons from "../pages/Pokemons/Pokemons";
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`/Pokedex-App${AppRoute.home}`} element={<Home />} />
      <Route path={`/Pokedex-App${AppRoute.pokemons}`} element={<Pokemons />} />
      <Route
        path={`/Pokedex-App${AppRoute.pokemons}/:id`}
        element={<PokemonDetails />}
      />
    </Routes>
  );
};
