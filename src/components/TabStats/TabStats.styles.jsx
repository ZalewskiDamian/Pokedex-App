import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2rem;
`;
export const Title = styled.h3(
  ({ theme }) => `
    font-size: ${theme.font.titleM};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    margin-bottom: 1rem;
    text-align: left;
    `
);
export const Row = styled.div`
  display: grid;
  grid-template-columns: 12rem 5rem 1fr;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;
export const RowTitle = styled.span(
  ({ theme }) => `
    font-size: ${theme.font.font_14};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    `
);
export const RowText = styled.span(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.gray};
    `
);
export const StatsProgress = styled.div(
  ({ progress }) => `
    width: calc(100% - ${progress}%);
    height: 0.5rem;
    border-radius: 0.4rem;
    `
);
