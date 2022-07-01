import { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper } from "./TabEvolution.styles";

const TabEvolution = ({ pokemon }) => {
  const [evolutionData, setEvolutionData] = useState({});
  const [evolutionChain, setEvolutionChain] = useState([]);

  const getEvolutionChain = async () => {
    await axios
      .get(pokemon.species.url)
      .then((res) => {
        axios
          .get(res.data.evolution_chain.url)
          .then((res) => setEvolutionData(res.data.chain))
          .catch((err) => console.log("Err: ", err));
      })
      .catch((err) => console.log("Err: ", err));
  };

  useEffect(() => {
    getEvolutionChain();
  }, []);

  console.log(evolutionData);
  return <Wrapper>ds</Wrapper>;
};

export default TabEvolution;
