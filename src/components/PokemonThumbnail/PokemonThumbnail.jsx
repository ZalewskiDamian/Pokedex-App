import { NavLink } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";

import Type from "../Type/Type";
import {
  Card,
  Number,
  Name,
  Image,
  Content,
  TypesWrapper,
} from "./PokemonThumbnail.styles";

const PokemonThumbnail = ({ id, name, image, types }) => {
  const typeColor = types[0].type.name;

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <NavLink to={`${AppRoute.pokemons}/${id}`}>
      <Card className={typeColor}>
        <Content>
          <Number>#{String(id).padStart(3, "0")}</Number>
          <Name>{capitalizeName(name)}</Name>
          <Image src={image} alt={name} />
          <TypesWrapper>
            {types.map((t, index) => (
              <Type
                key={t.slot}
                className={types[index].type.name}
                type={t.type.name}
              />
            ))}
          </TypesWrapper>
        </Content>
      </Card>
    </NavLink>
  );
};

export default PokemonThumbnail;
