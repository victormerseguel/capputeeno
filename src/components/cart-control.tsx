import { styled } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";

const CartCount = styled.span`
  display: flex;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  font-size: 10px;

  background-color: var(--delete-color);
  color: white;

  margin-left: -10px;
  margin-top: 50%;
`;

const Container = styled.div`
  display: flex;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
