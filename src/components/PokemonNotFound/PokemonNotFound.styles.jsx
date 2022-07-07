import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  text-align: center;
`;
export const Title = styled.h3(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    `
);
