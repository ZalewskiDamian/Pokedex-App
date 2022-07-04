import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
  Container,
  WrapperTop,
  Inner,
  ImageWrapper,
  PokemonImage,
  Content,
  Number,
  Name,
  TypesWrapper,
  WrapperBottom,
} from "./PokemonDetails.styles";
import { Type, Loading, Tabs } from "../../components";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchPokemonDetails = async (id) => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_URL}/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log("Err: ", err));
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonDetails(id);
  }, []);

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <WrapperTop
            className={pokemon.types[0].type.name}
            name={pokemon.name}
          >
            <Inner>
              <ImageWrapper>
                <PokemonImage
                  src={
                    pokemon.sprites.other.dream_world.front_default === null
                      ? pokemon.sprites.other["official-artwork"].front_default
                      : pokemon.sprites.other.dream_world.front_default
                  }
                  alt={pokemon.name}
                />
              </ImageWrapper>
              <Content>
                <Number>#{String(pokemon.id).padStart(3, "0")}</Number>
                <Name>{capitalizeName(pokemon.name)}</Name>
                <TypesWrapper>
                  {pokemon.types.map((item) => (
                    <Type key={item.slot} type={item.type.name} />
                  ))}
                </TypesWrapper>
              </Content>
            </Inner>
          </WrapperTop>
          <WrapperBottom>
            <Tabs pokemon={pokemon} />
          </WrapperBottom>
        </>
      )}
    </Container>
  );
};

export default PokemonDetails;
