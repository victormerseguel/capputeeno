"use client";
import { CartControl } from "./cart-control";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface TagHeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;

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
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;

  cursor: pointer;
`;

export function Header(props: TagHeaderProps) {
  const router = useRouter();

  return (
    <TagHeader>
      <Content>
        <Logo
          className={sairaStencil.className}
          onClick={() => router.replace("/")}
        >
          capputeeno
        </Logo>
        <div>
          <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
          <CartControl />
        </div>
      </Content>
    </TagHeader>
  );
}
