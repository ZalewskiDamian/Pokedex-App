import { useState, useEffect } from "react";
import axios from "axios";
import { Search, Loading, PokemonList, Pagination } from "../../components";
import { Container, Wrapper, Heading, Subheading } from "./Pokemons.styles";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    `${process.env.REACT_APP_URL}?offset=600`
  );
  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    setLoading(true);
    setPokemons([]);
    await axios.get(currentPage).then((res) => {
      res.data.results.forEach((item) => {
        axios
          .get(`${process.env.REACT_APP_URL}/${item.name}`)
          .then((res) => {
            setPokemons((prevState) => [...prevState, res.data]);
          })
          .catch((err) => console.log("err:", err));
      });
      setLoading(false);
      setPrevPage(res.data.previous);
      setNextPage(res.data.next);
      console.log(pokemons);
    });
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage);
  };

  return (
    <Container>
      <Wrapper>
        <Heading>Pokedex</Heading>
        <Subheading>
          Search for Pokemon by name or using the National Pokedex number.
        </Subheading>
        <Search placeholder="Search pokemon..." />
        {loading ? <Loading /> : <PokemonList pokemons={pokemons} />}
        <Pagination
          nextPage={nextPage ? goToNextPage : null}
          prevPage={prevPage ? goToPrevPage : null}
        />
      </Wrapper>
    </Container>
  );
};

export default Pokemons;
