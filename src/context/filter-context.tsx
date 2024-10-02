"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { PriorityTypes } from "../types/priority-types";
import { FilterType } from "../types/filter-types";
import { filterProductsByType } from "@/utils/filter-products";
import { useProducts } from "@/hooks/useProducts";
import { Product, ProductEmpty } from "../types/products-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  dataLength: 0,
  setDataLength: (value: number) => {},
  filtered: [ProductEmpty],
  currentProduct: ProductEmpty,
  setCurrentProduct: (value: Product) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.NEWS);
  const [dataLength, setDataLength] = useState(0);
  const { data } = useProducts("http://localhost:3333/");
  const [filtered, setFiltered] = useState<Product[]>([ProductEmpty]);
  const [currentProduct, setCurrentProduct] = useState<Product>(ProductEmpty);

  useEffect(() => {
    if (data) {
      setFiltered(
        filterProductsByType(data, type, priority, page, setDataLength, search)
      );
    }
  }, [data, page, type, priority, search]);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setSearch,
        setPage,
        setType,
        priority,
        setPriority,
        dataLength,
        setDataLength,
        filtered,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
