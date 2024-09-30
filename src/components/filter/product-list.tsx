"use client";
import styled from "styled-components";
import { ProductCard } from "./product-card";
import { useProducts } from "../../hooks/useProducts";
import { filterProductsByType } from "@/utils/filter-products";
import { useContext } from "react";
import { FilterContext } from "@/context/filter-context";

const CardsWraper = styled.div`
  margin-top: 32px;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export function ProductList() {
  const { data, loading } = useProducts("http://localhost:3333/");
  const { type, priority, page } = useContext(FilterContext);
  let filtered;

  if (data) {
    filtered = filterProductsByType(data, type, priority, page);
  }

  return (
    <>
      {loading && <p>Carrgando...</p>}
      {data && (
        <CardsWraper>
          {filtered?.map((product) => (
            <ProductCard
              image={product.image_url}
              name={product.name}
              price={product.price_in_cents}
              id={product.id}
              key={product.id}
            />
          ))}
        </CardsWraper>
      )}
    </>
  );
}
