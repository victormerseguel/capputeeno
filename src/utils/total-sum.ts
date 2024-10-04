import { useContext } from "react";
import { formatPrice } from "./format-price";
import { FilterContext } from "@/context/filter-context";

export const totalsum = () => {
  const { cart } = useContext(FilterContext);

  return formatPrice(
    cart.map((item) => item.price_in_cents).reduce((acc, cur) => acc + cur),
  );
};
