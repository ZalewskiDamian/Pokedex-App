import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 2rem;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
