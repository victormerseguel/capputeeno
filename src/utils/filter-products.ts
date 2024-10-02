import { FilterType } from "@/types/filter-types";
import { Product, Products } from "../types/products-types";
import { PriorityTypes } from "@/types/priority-types";

export const filterProductsByType = (
  dataProducts: Products,
  type: FilterType,
  priority: PriorityTypes,
  page: number,
  setDataLength: (value: number) => void,
  search: string
) => {
  let filteredProducts;
  let filter = "";

  // category filter
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

  // number of pages
  setDataLength(+(filteredProducts.length / 12).toFixed(0));

  // priority filter
  switch (priority) {
    case 0: {
      filteredProducts.sort((a: Product, b: Product) => {
        return b.sales - a.sales;
      });
      break;
    }
    case 1: {
      filteredProducts.sort((a: Product, b: Product) => {
        return b.created_at.localeCompare(a.created_at);
      });
      break;
    }
    case 2: {
      filteredProducts.sort((a: Product, b: Product) => {
        return b.price_in_cents - a.price_in_cents;
      });
      break;
    }
    case 3: {
      filteredProducts.sort((a: Product, b: Product) => {
        return a.price_in_cents - b.price_in_cents;
      });
      break;
    }
  }

  // search filter
  filteredProducts = filteredProducts.filter(
    (value) =>
      value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      value.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const filteredProductsPage = filteredProducts.slice(
    page * 12,
    page * 12 + 12
  );

  return { filteredProducts, filteredProductsPage };
};
