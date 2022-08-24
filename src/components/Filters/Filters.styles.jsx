import styled from "styled-components";
import dotsBg from "../../assets/images/background-dots.svg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const FiltersWrapper = styled.div`
  width: 100%;
  max-width: 55rem;
  margin: 0 auto 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FiltersIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin-left: 2rem;
  cursor: pointer;
`;
export const Title = styled.h3(
  ({ theme }) => `
    font-size: ${theme.font.titleM};
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.black};
    margin: 2rem 0 .5rem;
  `
);
export const Paragraph = styled.p(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.gray};
    margin-bottom: 2rem;
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
  outline: none;
  `
);
export const Option = styled.option``;
export const SwiperWrapper = styled.div`
  .swiper-pagination {
    height: 0.6rem;
    border-radius: 0.8rem;
  }
  .swiper-pagination-progressbar-fill {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.red};
  }
  .swiper-slide {
    height: auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const GenerationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 12rem);
  grid-gap: 2rem;
  justify-content: center;
  padding-bottom: 2rem;
  margin-top: 2rem;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, 15rem);
  }
`;
export const GenerationsCard = styled.div`
  border-radius: 0.8rem;
  padding: 2.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
  background-image: url(${dotsBg});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: left top;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  position: relative;
  transition: all 0.35s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
export const GenerationsImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
export const GenerationsImg = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const GenerationsTitle = styled.p(
  ({ theme }) => `
    font-size: ${theme.font.paragraph};
    font-weight: ${theme.weight.medium};
    color: ${theme.colors.gray};
    padding-top: 1rem;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .35s ease-in-out;

    &:hover {
      color: ${theme.colors.white};
    }
  `
);
export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 13rem));
  grid-gap: 1rem;
  justify-content: center;
`;
export const TypeButton = styled.button(
  ({ theme }) => `
  outline: none;
  border: none;
  font-size: ${theme.font.font_14};
  color: ${theme.colors.white};
  font-weight: ${theme.weight.medium};
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-gap: 2rem;
  align-items: center;
  border-radius: .8rem;
  padding: 1rem;
  transition: all .35s ease-in-out;
  box-shadow: 0 3px 6px rgba(0,0,0, .16);

  &:hover {
    cursor: pointer;
    grid-gap: 0rem;
  }
`
);
