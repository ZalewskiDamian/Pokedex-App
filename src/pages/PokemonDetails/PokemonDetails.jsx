import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AppRoute } from "../../routing/AppRoute.enum";
import {
  Container,
  WrapperTop,
  Inner,
  ImageWrapper,
  PokemonImage,
  Content,
  Number,
  Name,
  ArrowBack,
  TypesWrapper,
  WrapperBottom,
} from "./PokemonDetails.styles";
import { Type, Loading, Tabs } from "../../components";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    imageUrl: "",
    number: "",
    types: [],
    height: "",
    weight: "",
    abilities: [],
    exp: "",
    stats: [],
    description: "",
    friendship: "",
    catchRate: "",
    growthRate: "",
  });
  const [loading, setLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const { id } = useParams();

  const getEvoImages = async (evolutionChain) => {
    evolutionChain.map((chain) => {
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${chain.species_name}`)
        .then((res) => {
          if (res.data.sprites.other.dream_world.front_default) {
            chain.imageUrl = res.data.sprites.other.dream_world.front_default;
          } else {
            chain.imageUrl =
              res.data.sprites.other["official-artwork"].front_default;
          }
        })
        .catch((err) => console.log("Err: ", err));
    });
    setEvolutionChain(evolutionChain);
  };

  const getEvoDetails = async (url) => {
    const response = await axios
      .get(url)
      .catch((err) => console.log("Err: ", err));

    const evolutionChain = [];
    let evoData = response.data.chain;

    do {
      const evoDetails = evoData.evolution_details[0];

      evolutionChain.push({
        species_name: evoData.species.name,
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      });

      // eslint-disable-next-line prefer-destructuring
      evoData = evoData.evolves_to[0];
      // eslint-disable-next-line no-prototype-builtins
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

    getEvoImages(evolutionChain);
  };

  const getPokemonDescription = async (pokemon) => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
      .catch((err) => console.log("Err: ", err));

    const found = response.data.flavor_text_entries.find(
      (element) => element.language.name === "en"
    );

    const description = found.flavor_text;

    const friendship = response.data.base_happiness;

    const catchRate = Math.round((100 / 255) * response.data.capture_rate);

    const growthRate = response.data.growth_rate.name;

    setPokemon((prevState) => ({
      ...prevState,
      description,
      friendship,
      catchRate,
      growthRate,
    }));

    getEvoDetails(response.data.evolution_chain.url);
  };

  const fetchPokemonData = async (id) => {
    setLoading(true);

    const response = await axios
      .get(`${process.env.REACT_APP_URL}/${id}`)
      .catch((err) => console.log("Err: ", err));

    const name =
      response.data.name.charAt(0).toUpperCase() + response.data.name.slice(1);

    const imageUrl =
      response.data.sprites.other.dream_world.front_default === null
        ? response.data.sprites.other["official-artwork"].front_default
        : response.data.sprites.other.dream_world.front_default;

    const number = String(response.data.id).padStart(3, "0");

    const types = response.data.types.map((type) => type.type.name);

    const height =
      Math.round((response.data.height * 0.328084 + 0.00001) * 100) / 100;

    const weight =
      Math.round((response.data.weight * 0.220462 + 0.00001) * 100) / 100;

    const abilities = response.data.abilities.map(
      (ability) => ability.ability.name
    );

    const { stats } = response.data;

    const exp = response.data.base_experience;

    setPokemon({
      name,
      imageUrl,
      number,
      types,
      height,
      weight,
      abilities,
      exp,
      stats,
    });
    getPokemonDescription(id);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonData(id);
  }, [id]);

  console.log(pokemon);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <WrapperTop className={pokemon.types[0]} name={pokemon.name}>
            <ArrowBack to={AppRoute.home} />
            <Inner>
              <ImageWrapper>
                <PokemonImage src={pokemon.imageUrl} alt={pokemon.name} />
              </ImageWrapper>
              <Content>
                <Number>#{pokemon.number}</Number>
                <Name>{pokemon.name}</Name>
                <TypesWrapper>
                  {pokemon.types.map((type) => (
                    <Type key={type} type={type} />
                  ))}
                </TypesWrapper>
              </Content>
            </Inner>
          </WrapperTop>
          <WrapperBottom>
            <Tabs pokemon={pokemon} evolutionChain={evolutionChain} />
          </WrapperBottom>
        </>
      )}
    </Container>
  );
};

export default PokemonDetails;
