import { styled } from "styled-components";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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

  margin-left: -33px;
  margin-top: 60%;
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

export function CartControl() {
  const value: any = useLocalStorage("cart-items").value;

  return (
    <Container>
      <CartIcon />
      {value ? <CartCount>{value.length}</CartCount> : null}
    </Container>
  );
}
