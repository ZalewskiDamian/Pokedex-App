import styled from "styled-components";

const Button = styled.button(
  ({ theme }) =>
    `
  width: 100%;
  font-size: ${theme.font.paragraph};
  font-weight: ${theme.weight.regular};
  color: ${theme.colors.black};
  background-color: ${theme.colors.grayLight};
  border-radius: .8rem;
  margin-bottom: 1rem;
  text-align: center;
  border: none;
  outline: none;
  padding: 1.6rem 2rem;
  transition: all .35s ease-in-out;
  };

  &:hover {
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    box-shadow: 0 3px 6px rgba(0,0,0, .16);
  }
`
);

export default Button;
