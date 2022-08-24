import { useState, useEffect } from "react";
import axios from "axios";
import { regions, sort, types } from "./Home.data";
import { Loading, PokemonList, Filters } from "../../components";
import { Container, Wrapper, Logo } from "./Home.styles";
import logoIcon from "../../assets/images/logo.png";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [url, setUrl] = useState(process.env.REACT_APP_URL);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  // FILTERS
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  // const [region, setRegion] = useState("Kanto");
  const [sortBy, setSortBy] = useState("id");
  const [type, setType] = useState("all types");
  const [isFilter, setIsFilter] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [typeNotFound, setTypeNotFound] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const getPokemonData = async (result) => {
    const pokemonArr = [];
    const filterArr = [];

    await Promise.all(
      result.map((pokemon) => {
        return axios
          .get(`${url}/${pokemon.name}`)
          .then((res) => pokemonArr.push(res.data))
          .catch((err) => console.log("err:", err));
      })
    );

    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : -1));

    if (isTypeSelected) {
      pokemonArr.forEach((pokemon) => {
        pokemon.types.forEach((item) => {
          if (type === item.type.name) {
            filterArr.push(pokemon);
          }
        });
      });
      setIsFilter(true);
      setFilteredPokemons(filterArr);
      setPokemons(pokemonArr);
      setLoading(false);
    } else {
      setIsFilter(false);
      setPokemons(pokemonArr);
      setLoading(false);
    }
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
    regions.forEach((item) => {
      if (e.target.textContent === item.name) {
        // setRegion(e.target.textContent);
        setIsSearch(false);
        setIsFilter(false);
        setLimit(item.limit);
        setOffset(item.offset);
      }
    });
    setModalOpen(false);
  };
  const handleChangeSortBy = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
    const sorted = pokemons;

    if (e.target.value === "id") {
      sorted.sort((a, b) => (a.id > b.id ? 1 : -1));
      setPokemons(sorted);
    } else {
      sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
      setPokemons(sorted);
    }
    setModalOpen(false);
  };

  const handleChangeType = (e) => {
    console.log(e.target.value);
    if (e.target.value === "all types") {
      const allPokemons = pokemons;

      if (sortBy === "Name") {
        allPokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
        setIsFilter(false);
        setType(e.target.value);
        setPokemons(allPokemons);
        setIsTypeSelected(false);
        setTypeNotFound(false);
        setModalOpen(false);
      } else {
        allPokemons.sort((a, b) => (a.id > b.id ? 1 : -1));
        setIsFilter(false);
        setType(e.target.value);
        setPokemons(allPokemons);
        setIsTypeSelected(false);
        setTypeNotFound(false);
        setModalOpen(false);
      }
      return;
    }
    setIsTypeSelected(true);

    const filterArr = [];

    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((item) => {
        if (e.target.value === item.type.name) {
          filterArr.push(pokemon);
        }
      });
    });

    setIsSearch(false);
    setIsFilter(true);
    setFilteredPokemons(filterArr);
    setType(e.target.value);

    if (filterArr.length === 0) {
      setTypeNotFound(true);
    } else {
      setTypeNotFound(false);
    }
    setModalOpen(false);
  };

  const handleSearchPokemon = (e) => {
    setSearch(e.target.value);

    if (e.target.value !== "") {
      setIsSearch(true);
      setType("all types");
    } else {
      setIsSearch(false);
      setIsFilter(false);
    }

    const searchArr = [];

    pokemons.forEach((pokemon) => {
      if (pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        searchArr.push(pokemon);
      }
    });

    if (searchArr.length === 0) {
      setTypeNotFound(true);
      setSearchPokemons([]);
    } else {
      setTypeNotFound(false);
      setSearchPokemons(searchArr);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <Container>
        <Wrapper>
          <Logo src={logoIcon} alt="Pokemon logo" />
          <Filters
            regions={regions}
            // region={region}
            sort={sort}
            sortBy={sortBy}
            types={types}
            type={type}
            search={search}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
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
              searchPokemons={searchPokemons}
              filteredPokemons={filteredPokemons}
              isFilter={isFilter}
              typeNotFound={typeNotFound}
              isSearch={isSearch}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
