"use client";
import React from "react";
import { Product } from "../../types/products-types";
import { formatPrice } from "../../utils/format-price";

export const CartItem = (item: Product) => {
  return (
    <>
      <img src={item.image_url} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      ...
      <p>{formatPrice(item.price_in_cents)}</p>
    </>
  );
};
