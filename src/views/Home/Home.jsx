import { useState, useEffect } from "react";
import { Search } from "../../components";
import { Container, Heading, Subheading } from "./Home.styles";

const Home = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(`${process.env.REACT_APP_URL}`);
    const data = await res.json();

    console.log(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Container>
      <Heading>Pokedex</Heading>
      <Subheading>
        Search for Pokemon by name or using the National Pokedex number.
      </Subheading>
      <Search />
    </Container>
  );
};

export default Home;
