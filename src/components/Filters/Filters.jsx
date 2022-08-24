// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Search from "../Search/Search";
import FilterModal from "../FilterModal/FilterModal";
import Button from "../Button/Button";
import Type from "../Type/Type";
import {
  Wrapper,
  FiltersWrapper,
  Title,
  Paragraph,
  Select,
  Option,
  SwiperWrapper,
  GenerationsGrid,
  GenerationsCard,
  GenerationsImagesWrapper,
  GenerationsImg,
  GenerationsTitle,
  FiltersIcon,
  TypesGrid,
  TypeButton,
} from "./Filters.styles";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import filtersIcon from "../../assets/images/filter-icon.png";

const Filters = ({
  regions,
  // region,
  changeRegion,
  sort,
  sortBy,
  handleSortBy,
  types,
  type,
  handleChangeType,
  search,
  handleSearchPokemon,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <Wrapper>
      <FilterModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SwiperWrapper>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Title>Generations</Title>
              <Paragraph>
                Use search for generations to explore your Pokemon!
              </Paragraph>
              {/* <Select value={region} onChange={changeRegion}>
                  {regions.map((item) => (
                    <Option key={item.name} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select> */}
              <GenerationsGrid>
                {regions.map((item) => (
                  <GenerationsCard key={item.name} onClick={changeRegion}>
                    <GenerationsImagesWrapper>
                      {item.generationsImages.map((img) => (
                        <GenerationsImg key={img} src={img} alt={item.name} />
                      ))}
                    </GenerationsImagesWrapper>
                    <GenerationsTitle>{item.name}</GenerationsTitle>
                  </GenerationsCard>
                ))}
              </GenerationsGrid>
            </SwiperSlide>
            <SwiperSlide>
              <Title>Sort</Title>
              <Paragraph>
                Sort Pokemons alphabetically or by National Pokedex number!
              </Paragraph>
              {sort.map((item) => (
                <Button
                  key={item}
                  type="button"
                  value={item}
                  onClick={handleSortBy}
                >
                  {item}
                </Button>
              ))}
            </SwiperSlide>
            <SwiperSlide>
              <Title>Types</Title>
              <Paragraph>Sort Pokemons by their elemental type!</Paragraph>
              <TypesGrid>
                {types.map((item) => (
                  <TypeButton
                    key={item}
                    value={item}
                    type="button"
                    className={item}
                    onClick={handleChangeType}
                  >
                    <Type short type={item} />
                    {item}
                  </TypeButton>
                ))}
              </TypesGrid>
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>
      </FilterModal>
      <FiltersWrapper>
        <Search
          type="text"
          value={search}
          onChange={handleSearchPokemon}
          placeholder="Search Pokemon..."
        />
        <FiltersIcon
          src={filtersIcon}
          alt="filter icon"
          title="filter icon"
          onClick={() => setModalOpen(true)}
        />
      </FiltersWrapper>
    </Wrapper>
  );
};

export default Filters;
