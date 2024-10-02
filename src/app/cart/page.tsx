"use client";
import { CartItem } from "@/components/cart/cart-item";
import { ProductBack } from "@/components/product/product-back";
import { FilterContext } from "@/context/filter-context";
import { totalsum } from "@/utils/total-sum";
import { useContext } from "react";

export default function Page() {
  const { cart } = useContext(FilterContext);

  return (
    <div>
      <div>
        <ProductBack />
        <h2>Seu Carrinho</h2>
        <p>
          Total {"("}3 produtos{")"}
          <span>{totalsum()}</span>
        </p>
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
