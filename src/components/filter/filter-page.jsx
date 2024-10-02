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
  const { dataLength } = useContext(FilterContext);
  const pages = [];

  for (let i = 0; i < dataLength; i++) {
    pages.push(i);
  }

  return (
    <PageWraper>
      {dataLength && (
        <>
          {pages.map((page, i) => (
            <FilterPageNumber i={page} key={i} />
          ))}
        </>
      )}
      <FilterPageNumber i={<ArrowIcon />} direction="left" />
      <FilterPageNumber i={<ArrowIcon />} direction="right" />
    </PageWraper>
  );
}
