import { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  Loading,
  PokemonList,
  Pagination,
  Filters,
} from "../../components";
import { Container, Wrapper, Heading, Subheading } from "./Home.styles";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(process.env.REACT_APP_URL);
  const [loading, setLoading] = useState(true);
  // FILTERS
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  const [region, setRegion] = useState("Kanto");
  const [sortBy, setSortBy] = useState("id");
  const [type, setType] = useState("all types");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchPokemons, setSearchPokemons] = useState([]);
  // const [noSearchFound, setNoSearchFound] = useState(false);

  const regions = [
    {
      name: "Kanto",
      limit: 151,
      offset: 0,
    },
    {
      name: "Johto",
      limit: 100,
      offset: 151,
    },
    {
      name: "Hoenn",
      limit: 135,
      offset: 251,
    },
    {
      name: "Sinnoh",
      limit: 108,
      offset: 386,
    },
    {
      name: "Unova",
      limit: 155,
      offset: 494,
    },
    {
      name: "Kalos",
      limit: 72,
      offset: 649,
    },
    {
      name: "Alola",
      limit: 88,
      offset: 721,
    },
    {
      name: "Galar",
      limit: 89,
      offset: 809,
    },
  ];
  const sort = ["id", "name"];
  const types = [
    "all types",
    "grass",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  const getAllPokemons = async (limit, offset) => {
    setLoading(true);
    setPokemons([]);
    await axios.get(`${url}?limit=${limit}&offset=${offset}`).then((res) => {
      res.data.results.forEach((item) => {
        axios
          .get(`${url}/${item.name}`)
          .then((res) => {
            setPokemons((prevState) =>
              [...prevState, res.data].sort((a, b) => (a.id > b.id ? 1 : -1))
            );
          })
          .catch((err) => console.log("err:", err));
      });
      setLoading(false);
    });
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
    setType(e.target.value);
    setFilteredPokemons([]);

    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((item) => {
        if (item.type.name === e.target.value) {
          setFilteredPokemons((prevState) => [...prevState, pokemon]);
        }
      });
    });
  };

  const handleSearchPokemon = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Heading>Pokedex</Heading>
        <Subheading>Search for Pokemon by name.</Subheading>
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
            search={search}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
