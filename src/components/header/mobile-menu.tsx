import styled from "styled-components";
import { useRouter } from "next/navigation";
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const MobileMenuTag = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  left: 0;

  background-color: #fff;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileMenu = () => {
  const router = useRouter();

  return (
    <MobileMenuTag>
      <Content>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </Content>
    </MobileMenuTag>
  );
};
