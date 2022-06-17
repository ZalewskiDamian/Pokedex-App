import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PokemonModal } from "../../components";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const fetchPokemonDetails = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/${id}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log("Err: ", err));
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <>
      <h1>Hi</h1>
      <PokemonModal>
        <div>{pokemon.name}</div>
      </PokemonModal>
    </>
  );
};

export default PokemonDetails;
