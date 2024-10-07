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
  margin: 0 auto;
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
  padding-right: 160px;
`;

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
        <button></button>
        <div>
          <Link href={"#"}>Ajuda</Link>
          <Link href={"#"}>Reembolsos</Link>
          <Link href={"#"}>Entregas e frete</Link>
          <Link href={"#"}>trocas e devoluções</Link>
        </div>
      </Aside>
    </Wraper>
  );
}
