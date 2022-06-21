import {
  Wrapper,
  Title,
  Row,
  RowTitle,
  RowText,
  StatsProgress,
} from "./TabStats.styles";

const TabAbout = ({ pokemon }) => {
  return (
    <Wrapper>
      <Title>Base Stats</Title>
      {pokemon.stats.map((item) => (
        <Row key={item.stat.name}>
          <RowTitle>{item.stat.name}</RowTitle>
          <RowText>{item.base_stat}</RowText>
          <StatsProgress
            className={pokemon.types[0].type.name}
            progress={item.base_stat}
          />
        </Row>
      ))}
    </Wrapper>
  );
};

export default TabAbout;
