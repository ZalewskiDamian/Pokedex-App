import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import pokeballBg from "../../assets/images/pokeball-bg.svg";

export const Wrapper = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 14rem;
  height: 6rem;
  border-radius: 1rem;
  padding: 1rem;
  background-image: url(${pokeballBg});
  background-size: 43%;
  background-position: 9rem center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: -3.5rem;
    left: -3.5rem;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
  }
  &:hover {
    background-size: 60%;
  }
`;
export const Link = styled(NavLink)(
  ({ theme }) => `
    display: block;
    width: 100%;
    padding: 2rem 0;
    font-size: ${theme.font.font_14};
    font-weight: ${theme.weight.semiBold};
    color: ${theme.colors.white};
    `
);
