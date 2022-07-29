import styled from "styled-components";
import pokeballBg from "../../assets/images/pokeball-bg.svg";
import arrowIcon from "../../assets/images/arrow-icon.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: transparent;
  margin: 0 auto;
  word-break: break-all;
  transform: translateY(-4rem);
`;
export const Container = styled.div`
  width: 100%;
  max-width: 84rem;
  margin-left: auto;
  margin-right: auto;
`;
export const TabsNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`;
export const Tab = styled.button(
  ({ theme, active }) => `
    padding: 1.5rem 0;
    text-align: center;
    width: 10rem;
    color: ${theme.colors.white};
    font-weight: ${active ? theme.weight.medium : theme.weight.regular};
    background: transparent;
    opacity: ${active ? 1 : 0.5};
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
    border: none;

    &::before {
        content: ${active ? "''" : "unset"};
        position: absolute;
        top: -1rem;
        left: 0;
        background-image: url(${pokeballBg});
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 50px;
    }
    `
);
export const TabsWrapper = styled.div`
  flex-grow: 1;
`;
export const Content = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;
export const Title = styled.h3(
  ({ theme }) => `
    font-size: ${theme.font.subheadingM};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    margin-bottom: 1.5rem;
    text-align: left;

    @media (min-width: 620px) {
      text-align: center;
    }
    `
);
export const Description = styled.p(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.gray};
    margin-bottom: 2rem;
    `
);
export const RowAbout = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;
export const RowStats = styled.div`
  display: grid;
  grid-template-columns: 12rem 5rem 1fr;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    grid-template-columns: 15rem 5rem 1fr;
  }
`;
export const RowEvolution = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  @media (min-width: 620px) {
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const RowTitle = styled.span(
  ({ theme }) => `
    font-size: ${theme.font.font_14};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};

    @media (min-width: 992px) {
      font-size: ${theme.font.paragraph};
    }
    `
);
export const RowText = styled.span(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.gray};
    `
);
export const AbilitiesList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 1.7rem;
`;
export const ListItem = styled.li(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.gray};
    margin-right: 1rem;
    list-style-type: numeric;
    `
);
export const StatsBar = styled.div`
  height: 0.5rem;
  border-radius: 0.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayLight};
  position: relative;
`;
export const StatsProgress = styled.div(
  ({ progress }) => `
    position: absolute;
    top: 0;
    left: 0;
    width: ${progress}%;
    max-width: 100%;
    height: 0.5rem;
    border-radius: 0.4rem;
    `
);
export const EvolutionCard = styled.div`
  width: 100%;
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 4rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -2.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1.6rem;
      height: 1.6rem;
      background-image: url(${arrowIcon});
    }
    @media (min-width: 620px) {
      margin-bottom: 0;

      &::after {
        transform: translateY(-50%) rotate(-90deg);
        top: 50%;
        left: unset;
        right: -2.5rem;
      }
    }
  }
`;
export const EvolutionImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: all 0.35s ease-in-out;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: 992px) {
    width: 16rem;
    height: 16rem;
  }
`;
export const EvolutionImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const EvolutionTitle = styled.p(
  ({ theme }) => `
  font-size: ${theme.font.paragraph};
  font-weight: ${theme.weight.bold};
  color: ${theme.colors.black};
  text-align: center;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
  `
);
