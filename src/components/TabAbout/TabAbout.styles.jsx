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
  grid-template-columns: 30% 70%;
  justify-content: flex-start;
  align-items: center;
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
export const AbilitiesList = styled.ol`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ListItem = styled.li(
  ({ theme }) => `
        font-size: ${theme.font.paragraph};
        font-weight: ${theme.weight.regular};
        color: ${theme.colors.gray};
        margin-right: 1rem;
    `
);
