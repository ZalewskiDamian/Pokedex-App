import { useState, useEffect } from "react";
import axios from "axios";
import { Search, Loading, PokemonList, Pagination } from "../../components";
import { Container, Wrapper, Heading, Subheading } from "./Pokemons.styles";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(process.env.REACT_APP_URL);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getPokemons = () => {
    const perPage = 20;
    const offset = currentPage * perPage - perPage;
    setLoading(true);
    setPokemons([]);

    axios.get(`${url}?limit=${perPage}&offset=${offset}`).then((res) => {
      res.data.results.forEach((item) => {
        axios
          .get(`${url}/${item.name}`)
          .then((res) => {
            setPokemons((prevState) => [...prevState, res.data]);
          })
          .catch((err) => console.log("err:", err));
      });
      setPageCount(Math.ceil(res.data.count / perPage));
      setLoading(false);
    });
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const searchPokemon = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Heading>Pokedex</Heading>
        <Subheading>
          Search for Pokemon by name or using the National Pokedex number.
        </Subheading>
        <Search onChange={searchPokemon} placeholder="Search pokemon..." />
        {loading ? (
          <Loading />
        ) : (
          <PokemonList search={search} pokemons={pokemons} />
        )}
        <Pagination pageCount={pageCount} changePage={changePage} />
      </Wrapper>
    </Container>
  );
};

export default Pokemons;
