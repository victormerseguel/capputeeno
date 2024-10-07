import React from "react";
import { CheckIcon } from "@/components/product/check-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

type AddCartStatusProps = {
  animation: string;
  status: string;
};

const CartAlertWrap = styled.div<AddCartStatusProps>`
  position: absolute;
  top: 10px;
  right: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px 30px;
  border-radius: 8px;
  background-color: white;
  color: var(--text-dark2);

  animation: 0.3s
    ${(props) => (props.animation !== "" ? "slidein" : "slideout")} forwards;

  div:nth-of-type(2) {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;
    margin: 20px 0 10px;
  }

  svg {
    display: ${(props) => (props.status === "ok" ? "block" : "none")};
  }
`;

const Checkout = styled.button`
  border: none;
  font-family: inherit;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: var(--bg-primary);
  color: var(--shapes-dark);
  cursor: pointer;
  opacity: 0.8;

  height: 90%;

  &:hover {
    opacity: 1;
  }
`;

const StatusBar = styled.div<AddCartStatusProps>`
  background-color: ${(props) =>
    props.status === "ok" ? "#48B02C" : "#E9BF2B"};
  width: 95%;
  height: 15px;
  align-self: start;
  border-radius: 4px;
  animation: 5s slidebar;
`;

export const AddCartStatus = ({ animation, status }: AddCartStatusProps) => {
  const router = useRouter();
  return (
    <CartAlertWrap animation={animation} status={status}>
      <StatusBar status={status} animation={animation} />
      <div>
        <CheckIcon />
        <p>{status === "ok" && "Produto adicionado com sucesso"}</p>
        <p>{status === "already" && "Produto já adicionado anteriormente"}</p>
      </div>
      <Checkout onClick={() => router.replace("/checkout")}>
        Ir para o carrinho
      </Checkout>
    </CartAlertWrap>
  );
};
