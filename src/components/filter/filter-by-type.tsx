import { FilterContext } from "@/context/filter-context";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { useContext } from "react";
import { styled } from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const FilterByType = () => {
  const { type, setType } = useFilter();
  const { setPage } = useContext(FilterContext);

  const handleChangeType = (value: FilterType) => {
    setType(value);
    setPage(0);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
};

export default FilterByType;
