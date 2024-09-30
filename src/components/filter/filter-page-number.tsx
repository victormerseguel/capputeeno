"use client";
import { FilterContext } from "@/context/filter-context";
import { useContext, useEffect } from "react";
import styled from "styled-components";

type NumberProps = {
  selected: boolean;
  direction?: "left" | "right";
};

const Number = styled.li<NumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: ${(props) =>
    props.selected ? "1px solid var(--orange-low)" : "none"};
  border-radius: 8px;

  font-family: inherit;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  list-style: none;
  background-color: ${(props) =>
    props.selected ? "white" : "var(--shapes-medium)"};
  color: ${(props) =>
    props.selected ? "var(--orange-low)" : "var(--text-dark)"};

  cursor: pointer;

  > svg {
    transform: ${(props) =>
      props.direction === "left" ? "rotate(90deg)" : "rotate(-90deg)"};
  }
`;

type FilterPageNumberProps = {
  i: number | JSX.Element;
  direction?: "left" | "right";
};

export function FilterPageNumber({ i, direction }: FilterPageNumberProps) {
  const { page, setPage } = useContext(FilterContext);

  const handlePageClick = () => {
    if (typeof i === "number") {
      setPage(i);
    } else if (direction === "right") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <Number
      selected={page === i}
      onClick={handlePageClick}
      direction={direction}
    >
      {typeof i === "number" ? i + 1 : i}
    </Number>
  );
}
