import { FilterType } from "@/types/filter-types";
import { Products } from "../types/products";
import { PriorityTypes } from "@/types/priority-types";

export const filterProductsByType = (
  dataProducts: Products,
  type: FilterType,
  priority: PriorityTypes,
  page: number
) => {
  let filteredProducts;
  let filter = "";

  if (type === 1) {
    filter = "t-shirts";
  } else if (type === 2) {
    filter = "mugs";
  } else {
    filter = "";
  }

  if (filter !== "") {
    filteredProducts = dataProducts.data.allProducts.filter(
      (product) => product.category === filter
    );
  } else {
    filteredProducts = dataProducts.data.allProducts;
  }
  console.log(+(filteredProducts.length / 12).toFixed(0));

  return filteredProducts.slice(page * 12, page * 12 + 12);
};
