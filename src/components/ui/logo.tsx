import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const LogoTag = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;

  cursor: pointer;
`;

export const Logo = () => {
  const router = useRouter();

  return (
    <LogoTag
      className={sairaStencil.className}
      onClick={() => router.replace("/")}
    >
      capputeeno
    </LogoTag>
  );
};
