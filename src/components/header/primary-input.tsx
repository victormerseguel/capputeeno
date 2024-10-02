import { InputHTMLAttributes, useContext } from "react";
import { SearchIcon } from "./search-icon";
import { styled } from "styled-components";
import { FilterContext } from "@/context/filter-context";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  const { search, setSearch } = useContext(FilterContext);

  return (
    <InputContainer>
      <PrimaryInput
        {...props}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon />
    </InputContainer>
  );
}
