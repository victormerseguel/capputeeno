import { styled } from "styled-components";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

const CartCount = styled.span`
  display: flex;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -33px;
  margin-top: 60%;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

export function CartControl() {
  const { cart } = useContext(FilterContext);
  const value: any = useLocalStorage("cart-items");
  const router = useRouter();

  return (
    <Container onClick={() => router.replace("/checkout")}>
      <CartIcon />
      {value && cart.length !== 0 ? (
        <CartCount>{cart?.length}</CartCount>
      ) : null}
    </Container>
  );
}
