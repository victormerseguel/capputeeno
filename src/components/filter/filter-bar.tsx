"use client";
import { styled } from "styled-components";

import FilterByType from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

type FilterContainerProps = {
  window: string;
};

const FilterContainer = styled.div<FilterContainerProps>`
  display: flex;
  flex-direction: ${({ window }) => (window === "true" ? "column" : "row")};
  gap: 20px;
  width: 100%;
  align-items: ${({ window }) => (window === "true" ? "end" : "start")};
  justify-content: space-between;
`;

export function FilterBar() {
  const { windowWidth } = useContext(FilterContext);

  return (
    <FilterContainer window={windowWidth.toString()}>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}
