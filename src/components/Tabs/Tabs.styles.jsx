import styled from "styled-components";
import pokeballBg from "../../assets/images/pokeball-bg.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: transparent;
  margin: 0 auto;
  word-break: break-all;
  transform: translateY(-4rem);
`;
export const TabsNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
