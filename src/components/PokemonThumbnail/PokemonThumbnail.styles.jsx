import styled from "styled-components";
import pokeballBg from "../../assets/images/pokeball-bg.svg";

export const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  background-image: url(${pokeballBg});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: right center;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.16);
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    background-size: 50%;
  }
`;
export const Number = styled.p(
  ({ theme }) => `
  font-size: ${theme.font.paragraph};
  font-weight: ${theme.weight.bold};
  color: ${theme.colors.grayDark};
  `
);
export const Name = styled.h3(
  ({ theme }) => `
  font-size: ${theme.font.headingM};
  font-weight: ${theme.weight.extraBold};
  color: ${theme.colors.white};
  letter-spacing: .1rem;
  margin-bottom: 10px;
  `
);
export const Image = styled.img`
  height: 10rem;
  max-width: 12rem;
  position: absolute;
  top: -1.5rem;
  right: 2rem;

  @media (min-width: 475px) {
    max-width: 20rem;
    height: 12rem;
    right: 4rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TypesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
