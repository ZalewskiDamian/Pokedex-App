import { useState, useEffect } from "react";
import axios from "axios";
import { regions, sort, types } from "./Home.data";
import { Loading, PokemonList, Filters } from "../../components";
import { Container, Wrapper } from "./Home.styles";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [url, setUrl] = useState(process.env.REACT_APP_URL);
  const [loading, setLoading] = useState(true);
  // FILTERS
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  const [region, setRegion] = useState("Kanto");
  const [sortBy, setSortBy] = useState("id");
  const [type, setType] = useState("all types");
  const [isFilter, setIsFilter] = useState(false);
  const [typeNotFound, setTypeNotFound] = useState(false);
  const [search, setSearch] = useState("");

  const getPokemonData = async (result) => {
    const pokemonArr = [];

    await Promise.all(
      result.map((pokemon) => {
        return axios
          .get(`${url}/${pokemon.name}`)
          .then((res) => pokemonArr.push(res.data))
          .catch((err) => console.log("err:", err));
      })
    );
    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    setPokemons(pokemonArr);
    setLoading(false);
  };

  const getAllPokemons = async (limit, offset) => {
    setLoading(true);

    await axios
      .get(`${url}?limit=${limit}&offset=${offset}`)
      .then((res) => {
        getPokemonData(res.data.results);
      })
      .catch((err) => console.log("err:", err));
  };

  useEffect(() => {
    getAllPokemons(limit, offset);
  }, [limit, offset]);

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);

    regions.forEach((item) => {
      if (e.target.value === item.name) {
        setLimit(item.limit);
        setOffset(item.offset);
      }
    });
  };

  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
    const sorted = pokemons;

    if (e.target.value === "id") {
      sorted.sort((a, b) => (a.id > b.id ? 1 : -1));
      setPokemons(sorted);
    } else {
      sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
      setPokemons(sorted);
    }
  };

  const handleChangeType = (e) => {
    setFilteredPokemons([]);

    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((item) => {
        if (e.target.value === "all types") {
          setTypeNotFound(false);
        } else if (e.target.value === item.type.name) {
          setFilteredPokemons((prevState) => [...prevState, pokemon]);
        } else {
          setTypeNotFound(true);
        }
      });
    });

    setType(e.target.value);
    setIsFilter(true);
  };

  const handleSearchPokemon = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Filters
          regions={regions}
          region={region}
          sort={sort}
          sortBy={sortBy}
          types={types}
          type={type}
          changeRegion={handleChangeRegion}
          handleSortBy={handleChangeSortBy}
          handleChangeType={handleChangeType}
          handleSearchPokemon={handleSearchPokemon}
        />
        {loading ? (
          <Loading />
        ) : (
          <PokemonList
            pokemons={pokemons}
            filteredPokemons={filteredPokemons}
            isFilter={isFilter}
            typeNotFound={typeNotFound}
            search={search}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
