// import { useState } from "react";
import { formatPrice } from "./format-price";
import { Product } from "@/types/products-types";

export const totalsum = (items: Product[]) => {
  // const [sum, setSum] = useState("");
  // console.log(amount);

  return formatPrice(
    items
      .map((item) =>
        item.amount ? item.price_in_cents * item.amount : item.price_in_cents,
      )
      .reduce((acc, cur) => acc + cur),
  );
};
