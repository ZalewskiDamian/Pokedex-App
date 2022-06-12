import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 0.6rem;
  padding: 1.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.color.gray};
`;
export const Number = styled.p(
  ({ theme }) => `
        font-size: ${theme.font.font_14};
        font-weight: ${theme.weight.bold};
        color: ${theme.color.gray};
        margin-bottom: 5px;
    `
);
export const Name = styled.h3(
  ({ theme }) => `
        font-size: ${theme.font.headingM};
        font-weight: ${theme.weight.extraBold};
        color: ${theme.color.white};
        margin-bottom: 5px;
    `
);
