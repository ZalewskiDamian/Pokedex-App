import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
`;
export const Heading = styled.h1(
  ({ theme }) => `
        font-size: ${theme.font.headingM};
        color: ${theme.colors.black};
        font-weight: ${theme.weight.extraBold};
        margin-bottom: 1rem;
    `
);

export const Subheading = styled.p(
  ({ theme }) => `
        font-size: ${theme.font.subheadingM};
        font-weight: ${theme.weight.medium};
        color: ${theme.colors.gray};
        margin-bottom: 1.5rem;
    `
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
`;
