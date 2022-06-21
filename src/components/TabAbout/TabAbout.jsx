import {
  Wrapper,
  Title,
  Row,
  RowTitle,
  RowText,
  AbilitiesList,
  ListItem,
} from "./TabAbout.styles";

const TabAbout = ({ pokemon }) => {
  return (
    <Wrapper>
      <Title>Pokemon Data</Title>
      <Row>
        <RowTitle>Species</RowTitle>
        <RowText>{pokemon.species.name}</RowText>
      </Row>
      <Row>
        <RowTitle>Height</RowTitle>
        <RowText>{pokemon.height}″</RowText>
      </Row>
      <Row>
        <RowTitle>Weight</RowTitle>
        <RowText>{pokemon.weight} lbs</RowText>
      </Row>
      <Row>
        <RowTitle>Abilities</RowTitle>
        <AbilitiesList>
          {pokemon.abilities.map((item) => (
            <ListItem key={item.ability.name}>{item.ability.name}</ListItem>
          ))}
        </AbilitiesList>
      </Row>
      <Row>
        <RowTitle>Experience</RowTitle>
        <RowText>{pokemon.base_experience}</RowText>
      </Row>
    </Wrapper>
  );
};

export default TabAbout;
