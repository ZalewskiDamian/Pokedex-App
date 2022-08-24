import { Wrapper, Icon, Name } from "./Type.styles";

import bug from "../../assets/images/types/bug.svg";
import dark from "../../assets/images/types/dark.svg";
import dragon from "../../assets/images/types/dragon.svg";
import electric from "../../assets/images/types/electric.svg";
import fairy from "../../assets/images/types/fairy.svg";
import fighting from "../../assets/images/types/fighting.svg";
import fire from "../../assets/images/types/fire.svg";
import flying from "../../assets/images/types/flying.svg";
import ghost from "../../assets/images/types/ghost.svg";
import grass from "../../assets/images/types/grass.svg";
import ground from "../../assets/images/types/ground.svg";
import ice from "../../assets/images/types/ice.svg";
import normal from "../../assets/images/types/normal.svg";
import poison from "../../assets/images/types/poison.svg";
import psychic from "../../assets/images/types/psychic.svg";
import rock from "../../assets/images/types/rock.svg";
import steel from "../../assets/images/types/steel.svg";
import water from "../../assets/images/types/water.svg";
import all from "../../assets/images/types/all.png";

const Type = ({ type, short }) => {
  const renderTypeIcon = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      case "all types":
        return all;

      default:
        return null;
    }
  };

  return (
    <Wrapper className={type} short={short}>
      <Icon src={renderTypeIcon(type)} alt={type} title={type} />
      {short ? null : <Name>{type}</Name>}
    </Wrapper>
  );
};

export default Type;
