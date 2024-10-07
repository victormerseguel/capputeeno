// "use client";
import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../types/products-types";
import { formatPrice } from "../../utils/format-price";
import styled from "styled-components";
import { DeleteIcon } from "./delete-icon";
import { FilterContext } from "@/context/filter-context";

const WraperCartItem = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding-right: 16px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  img {
    max-width: 256px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    div:nth-of-type(1) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-size: 20px;
        font-weight: 300;
        color: var(--text-dark2);
        margin: 16px 0 12px;
      }
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: var(--text-dark2);
      line-height: 18px;
      margin-right: 4px;
    }
  }
`;

const SelectWrap = styled.div`
  margin-top: auto;
  margin-bottom: 24px;
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: flex-end !important;

  select {
    /* width: 65px; */

    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--text-cart);

    font-family: inherit;
    font-size: 16px;
    color: var(--text-dark);
    padding: 8px 12px;
  }

  p {
    margin: 0;
    font-size: 16px !important;
    font-weight: 600 !important;
    color: var(--shapes-dark) !important;
  }
`;

type CartItemProps = {
  product: Product;
  amountItem: number;
  setAmountItem: (value: number) => void;
};

export const CartItem = ({
  product,
  amountItem,
  setAmountItem,
}: CartItemProps) => {
  const { cart, setCart } = useContext(FilterContext);
  const [itemTotal, setItemTotal] = useState(0);

  // stock simulation by api
  let amountArray: number[] = [];

  const amountItens = () => {
    for (let i = 0; i < 10; i++) {
      amountArray.push(i + 1);
    }
  };
  amountItens();
  // ----------------

  useEffect(() => {
    setAmountItem(product.amount ? product.amount : 1);
  });

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const amountSelected = +e.target.value;
    cart.forEach((item) => {
      if (item.id === product.id) {
        product.amount = amountSelected;
        setCart(cart);
        localStorage.setItem("cart-items", JSON.stringify(cart));
      }
    });
    setAmountItem(amountSelected);
  };

  return (
    <WraperCartItem>
      <img src={product.image_url} alt={product.name} />
      <div>
        <div>
          <h4>{product.name}</h4>
          <DeleteIcon item={product} />
        </div>
        <p>{product.description}</p>
        <SelectWrap>
          <select
            id={product.id}
            onChange={(e) => handleAmount(e)}
            defaultValue={product.amount ? product.amount : 1}
          >
            {amountArray &&
              amountArray.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
          </select>
          <p id="cart-item-total">
            {formatPrice(
              product.price_in_cents * (product.amount ? product.amount : 1),
            )}
          </p>
        </SelectWrap>
      </div>
    </WraperCartItem>
  );
};
