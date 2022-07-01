import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SelectTitle = styled.h3(
  ({ theme }) => `
    font-size: ${theme.font.titleM};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    margin-bottom: 1rem;
  `
);
export const Select = styled.select(
  ({ theme }) => `
  font-size: ${theme.font.paragraph};
  font-weight: ${theme.weight.regular};
  border-radius: .4rem;
  margin: 0 .5rem;
  padding: .5rem 1rem;
  border: .1rem solid ${theme.colors.gray};
  cursor: pointer;
  `
);
export const Option = styled.option``;
