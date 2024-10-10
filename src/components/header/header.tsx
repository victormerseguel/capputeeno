"use client";
import { CartControl } from "./cart-control";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FilterContext } from "@/context/filter-context";
import { MobileMenu } from "./mobile-menu";
import { Saira_Stencil_One } from "next/font/google";
import { Logo } from "../ui/logo";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface TagHeaderProps {}

const TagHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  z-index: 3;
  border-bottom: 0.5px solid var(--bg-primary);

  div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 20px 50px;
  }
`;

// const Logo = styled.a`
//   color: var(--logo-color);
//   font-weight: 400;
//   font-size: 40px;
//   line-height: 150%;

//   cursor: pointer;
// `;

export const MenuMobileButton = styled.span<{ mobile: string }>`
  --margin-top: 8px;
  --height: 3px;
  display: block;
  width: 28px;
  height: var(--height);
  background-color: var(--logo-color);
  border-radius: 2px;
  margin-top: calc((((9 + 16) / 2) - 1.5) * -1px);
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: var(--height);
    background-color: var(--logo-color);
    border-radius: 2px;
  }

  &:before {
    margin-top: var(--margin-top);
  }

  &:after {
    margin-top: calc(var(--margin-top) - 3px);
  }

  @media (min-width: 768px) {
    display: none;
    background-color: red;
  }

  ${({ mobile }) =>
    mobile !== "false"
      ? `background-color: transparent; 
        --margin-top: 8px;
      
      &:before {
        transform: rotate(-45deg);
      } 
      
      &:after {
        transform: rotate(45deg); 
        margin-top: calc(var(--margin-top) - 11px);
      }`
      : ""}
`;

export function Header(props: TagHeaderProps) {
  const router = useRouter();
  const [mobile, setMobile] = useState<boolean>(true);
  const { windowWidth, setWindowWidth } = useContext(FilterContext);

  window.addEventListener("resize", () => {
    if (window.screen.width < 768) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
      setMobile(false);
    }
  });

  return (
    <TagHeader>
      <Content>
        <Logo />
        {!windowWidth && (
          <div>
            <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
            <CartControl />
          </div>
        )}
        <MenuMobileButton
          mobile={mobile.toString()}
          onClick={() => setMobile(!mobile)}
        ></MenuMobileButton>
      </Content>
      {mobile && <MobileMenu />}
    </TagHeader>
  );
}
