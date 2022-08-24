import styled from "styled-components";
import searchIcon from "../../assets/images/search-icon.png";

const Search = styled.input(
  ({ theme }) => `
  width: 100%;
  max-width: 38rem;
  border: 1px solid ${theme.colors.grayLight};
  border-radius: 0.8rem;
  font-size: ${theme.font.paragraph};
  color: ${theme.colors.gray};
  background-color: ${theme.colors.grayLight};
  padding: 1.5rem 1rem 1.5rem 5.5rem;
  outline: 0;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 5% center;
  transition: all .4s;

  &::placeholder {
    color: ${theme.colors.gray};
    font-weight: ${theme.weight.medium};
  }
  &:focus {
    border: 1px solid ${theme.colors.gray};
  }
  `
);

export default Search;
