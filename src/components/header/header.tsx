"use client";
import { CartControl } from "./cart-control";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface TagHeaderProps {}

const TagHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: #ffffff;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: TagHeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl></CartControl>
      </div>
    </TagHeader>
  );
}
