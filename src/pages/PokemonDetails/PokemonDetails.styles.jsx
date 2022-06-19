import styled from "styled-components";
import pokemonBg from "../../assets/images/pokemon-details-bg.svg";

export const Container = styled.div`
  width: 100%;
`;
export const WrapperTop = styled.div`
  width: 100%;
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "${({ name }) => name}";
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 7rem;
    font-weight: 900;
    font-family: sans-serif;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 5%,
      rgba(255, 255, 255, 0.4) 25%,
      rgba(255, 255, 255, 0.15) 5%,
      transparent 80%
    );
  }
`;
export const Inner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-image: url(${pokemonBg});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const PokemonImage = styled.img`
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
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
  margin-bottom: .5REM;
  `
);
export const TypesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const WrapperBottom = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  transform: translateY(-2rem);
  padding: 2rem;
`;
