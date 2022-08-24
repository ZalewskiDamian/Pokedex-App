import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";
import Type from "../Type/Type";
import {
  Wrapper,
  Container,
  TabsNav,
  Tab,
  TabsWrapper,
  Content,
  Inner,
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
  RowEffectivenes,
  TypesWrapper,
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

  const totalStats = () => {
    let total = 0;
    pokemon.stats.forEach((item) => {
      total += item.base_stat;
    });
    return total;
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
            <Inner>
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
                    <ListItem key={item.ability.name}>
                      {item.ability.name}{" "}
                      {item.is_hidden && <span>(hidden ability)</span>}
                    </ListItem>
                  ))}
                </AbilitiesList>
              </RowAbout>
            </Inner>
            <Inner>
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
                <RowText>{pokemon.catchRate}%</RowText>
              </RowAbout>
              <RowAbout>
                <RowTitle>Growth Rate</RowTitle>
                <RowText>{pokemon.growthRate}</RowText>
              </RowAbout>
            </Inner>
          </Container>
        </Content>
        {/* TAB STATS */}
        <Content active={toggleState === 2 && active}>
          <Container>
            <Inner>
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
              <RowStats>
                <RowTitle>Total</RowTitle>
                <RowText big>{totalStats()}</RowText>
              </RowStats>
            </Inner>
            <Inner>
              <Title>Type Defenses</Title>
              <RowEffectivenes>
                <RowTitle>2x Damage From</RowTitle>
                <TypesWrapper>
                  {pokemon.damageRelations.double_damage_from.map((item) => (
                    <Type short key={item.name} type={item.name} />
                  ))}
                </TypesWrapper>
              </RowEffectivenes>
              <RowEffectivenes>
                <RowTitle>1/2 Damage From</RowTitle>
                <TypesWrapper>
                  {pokemon.damageRelations.half_damage_from.map((item) => (
                    <Type short key={item.name} type={item.name} />
                  ))}
                </TypesWrapper>
              </RowEffectivenes>
            </Inner>
            <Inner>
              <Title>Type Attacking</Title>
              <RowEffectivenes>
                <RowTitle>2x Damage To</RowTitle>
                <TypesWrapper>
                  {pokemon.damageRelations.double_damage_to.map((item) => (
                    <Type short key={item.name} type={item.name} />
                  ))}
                </TypesWrapper>
              </RowEffectivenes>
              <RowEffectivenes>
                <RowTitle>1/2 Damage To</RowTitle>
                <TypesWrapper>
                  {pokemon.damageRelations.half_damage_to.map((item) => (
                    <Type short key={item.name} type={item.name} />
                  ))}
                </TypesWrapper>
              </RowEffectivenes>
            </Inner>
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
