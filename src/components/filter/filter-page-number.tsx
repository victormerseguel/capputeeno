"use client";
import { FilterContext } from "../../context/filter-context";
import { useContext } from "react";
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
  border-radius: 8px;

  font-family: inherit;
  font-size: 16px;
  list-style: none;

  cursor: pointer;

  ${(props) =>
    props.selected
      ? "border: 1px solid var(--orange-low); font-weight: 600; background-color: white; color: var(--orange-low);"
      : "border: none; font-weight: 400; background-color: var(--shapes-medium); color: var(--text-dark);"}

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
  const { page, setPage, dataLength } = useContext(FilterContext);

  const handlePageClick = () => {
    if (typeof i === "number") {
      setPage(i);
    } else if (direction === "right") {
      page >= dataLength - 1 ? setPage(0) : setPage(page + 1);
    } else {
      page <= 0 ? setPage(dataLength - 1) : setPage(page - 1);
    }
    window.scroll(0, 0);
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
