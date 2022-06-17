import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
export const Icon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 5px;
`;
export const Name = styled.span(
  ({ theme }) => `
    color: ${theme.colors.white};
    font-size: ${theme.font.font_14};
    font-weight: ${theme.weight.medium};
    `
);
