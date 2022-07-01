import { TypesWrapper } from "../PokemonThumbnail/PokemonThumbnail.styles";
import Search from "../Search/Search";
import {
  Wrapper,
  FiltersWrapper,
  SelectWrapper,
  SelectTitle,
  Select,
  Option,
} from "./Filters.styles";

const Filters = ({
  regions,
  region,
  changeRegion,
  sort,
  sortBy,
  handleSortBy,
  types,
  type,
  handleChangeType,
  handleSearchPokemon,
}) => {
  return (
    <Wrapper>
      <FiltersWrapper>
        <SelectWrapper>
          <SelectTitle>Region</SelectTitle>
          <Select value={region} onChange={changeRegion}>
            {regions.map((item) => (
              <Option key={item.name} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <SelectTitle>Sort By</SelectTitle>
          <Select value={sortBy} onChange={handleSortBy}>
            {sort.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <SelectTitle>Types</SelectTitle>
          <Select value={type} onChange={handleChangeType}>
            {types.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </SelectWrapper>
      </FiltersWrapper>
      <Search onChange={handleSearchPokemon} placeholder="Search pokemon..." />
    </Wrapper>
  );
};

export default Filters;
