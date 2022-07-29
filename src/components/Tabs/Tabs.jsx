import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";
import {
  Wrapper,
  Container,
  TabsNav,
  Tab,
  TabsWrapper,
  Content,
  Title,
  Description,
  RowTitle,
  RowAbout,
  RowText,
  AbilitiesList,
  ListItem,
  RowStats,
  StatsBar,
  StatsProgress,
  RowEvolution,
  EvolutionCard,
  EvolutionImage,
  EvolutionImageWrapper,
  EvolutionTitle,
} from "./Tabs.styles";

const Tabs = ({ pokemon, evolutionChain }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const active = true;

  const capitalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <Wrapper>
      <TabsNav>
        <Tab
          type="button"
          active={toggleState === 1 && active}
          onClick={() => toggleTab(1)}
        >
          About
        </Tab>
        <Tab
          type="button"
          active={toggleState === 2 && active}
          onClick={() => toggleTab(2)}
        >
          Stats
        </Tab>
        <Tab
          type="button"
          active={toggleState === 3 && active}
          onClick={() => toggleTab(3)}
        >
          Evolution
        </Tab>
      </TabsNav>

      <TabsWrapper>
        {/* TAB ABOUT */}
        <Content active={toggleState === 1 && active}>
          <Container>
            <Title>Pokemon Data</Title>
            <Description>{pokemon.description}</Description>
            <RowAbout>
              <RowTitle>Species</RowTitle>
              <RowText>{pokemon.name}</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Height</RowTitle>
              <RowText>{pokemon.height} ft.</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Weight</RowTitle>
              <RowText>{pokemon.weight} lbs</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Abilities</RowTitle>
              <AbilitiesList>
                {pokemon.abilities.map((item) => (
                  <ListItem key={item}>
                    {item} {item.is_hidden && <span>(hidden ability)</span>}
                  </ListItem>
                ))}
              </AbilitiesList>
            </RowAbout>
            <Title>Training</Title>
            <RowAbout>
              <RowTitle>Base Exp</RowTitle>
              <RowText>{pokemon.exp}</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Friendship</RowTitle>
              <RowText>{pokemon.friendship} (normal)</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Catch Rate</RowTitle>
              <RowText>{pokemon.catchRate} %</RowText>
            </RowAbout>
            <RowAbout>
              <RowTitle>Growth Rate</RowTitle>
              <RowText>{pokemon.growthRate}</RowText>
            </RowAbout>
          </Container>
        </Content>
        {/* TAB STATS */}
        <Content active={toggleState === 2 && active}>
          <Container>
            <Title>Base Stats</Title>
            {pokemon.stats.map((item) => (
              <RowStats key={item.stat.name}>
                <RowTitle>{item.stat.name}</RowTitle>
                <RowText>{item.base_stat}</RowText>
                <StatsBar>
                  <StatsProgress
                    className={pokemon.types[0]}
                    progress={item.base_stat}
                  />
                </StatsBar>
              </RowStats>
            ))}
          </Container>
        </Content>
        {/* TAB EVOLUTION */}
        <Content active={toggleState === 3 && active}>
          <Container>
            <Title>Pokemon Evolutions</Title>
            <RowEvolution>
              {evolutionChain.map((item) => (
                <EvolutionCard key={item.species_name}>
                  <NavLink to={`${AppRoute.pokemons}/${item.species_name}`}>
                    <EvolutionImageWrapper className={pokemon.types[0]}>
                      <EvolutionImage
                        src={item.imageUrl}
                        alt={item.species_name}
                      />
                    </EvolutionImageWrapper>
                    <EvolutionTitle>
                      {capitalizeName(item.species_name)}
                    </EvolutionTitle>
                    <EvolutionTitle>{item.min_level} lvl</EvolutionTitle>
                  </NavLink>
                </EvolutionCard>
              ))}
            </RowEvolution>
          </Container>
        </Content>
      </TabsWrapper>
    </Wrapper>
  );
};

export default Tabs;
