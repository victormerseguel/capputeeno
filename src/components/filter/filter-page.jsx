"use client";
import styled from "styled-components";
import { FilterPageNumber } from "./filter-page-number";
import { ArrowIcon } from "./arrow-icon";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

const PageWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 2px;

  margin-top: 24px;
`;

export function FilterPage() {
  const { pageLenght } = useContext(FilterContext);

  return (
    <PageWraper>
      <FilterPageNumber i={0} />
      <FilterPageNumber i={1} />
      <FilterPageNumber i={2} />
      <FilterPageNumber i={3} />
      <FilterPageNumber i={4} />
      <FilterPageNumber i={5} />
      <FilterPageNumber i={<ArrowIcon />} direction="left" />
      <FilterPageNumber i={<ArrowIcon />} direction="right" />
    </PageWraper>
  );
}
