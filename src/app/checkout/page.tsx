"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartItem } from "../../components/cart/cart-item";
import { ProductBack } from "../../components/product/product-back";
import { FilterContext } from "../../context/filter-context";
import { totalsum } from "../../utils/total-sum";
import styled from "styled-components";
import { formatPrice } from "@/utils/format-price";
import Link from "next/link";

const Wraper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 40px auto;
  gap: 32px;
  padding: 0 160px;
`;

const WraperCart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 6px;
    text-transform: uppercase;
    color: var(--text-dark2);
  }

  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 23px;
    color: var(--text-dark2);

    span {
      font-weight: 600;
    }
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Aside = styled.aside`
  width: 350px;
  padding: 16px 24px;

  background-color: white;

  h3 {
    width: 350px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-dark2);
    margin-bottom: 29px;

  }

  div{
    display: flex;
    justify-content: space-between;
  
    p{
      font-size: 16px;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 12px;
    }
  }
  
  div:nth-of-type(2){
    border-bottom: 1px solid var(--shapes);
    padding-bottom: 12px;
    margin-bottom: 8px;
  }

  div:nth-of-type(3) {
    p,span{
      font-weight: 600;
    }
  }
`;

const Button = styled.button `
  width:100%;
  padding: 10px;
  margin-top: 28px;

  font-family: inherit;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--bg-secondary);

  background-color:var(--others-green);
  border: none;
  border-radius:4px;
cursor:pointer;
`


const Links = styled.div `
  margin-top: auto !important;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  a{
  font-weight: 500;
    color: var(--text-dark3);
    text-transform: uppercase;
  }
`

export default function Page() {
  const { cart } = useContext(FilterContext);
  const [amountItem, setAmountItem] = useState(1);
  const [total, setTotal] = useState<string>();

  const shipping_in_cents = 4000;

  useEffect(() => {
    if (cart) setTotal(totalsum(cart));
  }, [amountItem, cart]);

  return (
    <Wraper>
      <WraperCart>
        <div>
          <ProductBack />
          <h2>Seu Carrinho</h2>
          <p>
            Total {"(" + (cart ? cart.length : 0)} produtos{") "}
            <span>{total}</span>
          </p>
          {cart && (
            <CartItems>
              {cart &&
                cart.map((item) => (
                  <CartItem
                    product={item}
                    key={item.id}
                    amountItem={amountItem}
                    setAmountItem={setAmountItem}
                  />
                ))}
            </CartItems>
          )}
        </div>
      </WraperCart>
      <Aside>
        <h3>Resumo do Pedido</h3>
        <div>
          <p>Subtotal de produtos</p>
          <span>{total}</span>
        </div>
        <div>
          <p>Entrega</p>
          <span>{formatPrice(shipping_in_cents)}</span>
        </div>
        <div>
          <p>Total</p>
          <span>
            {formatPrice(
              total
                ? +total.replace("R$", "").replace(",", ".") * 100 +
                    shipping_in_cents
                : shipping_in_cents,
            )}
          </span>
        </div>
        <Button>Finalizar Compra</Button>
        <Links>
          <Link href={"#"}>Ajuda</Link>
          <Link href={"#"}>Reembolsos</Link>
          <Link href={"#"}>Entregas e frete</Link>
          <Link href={"#"}>Trocas e devoluções</Link>
        </Links>
      </Aside>
    </Wraper>
  );
}
