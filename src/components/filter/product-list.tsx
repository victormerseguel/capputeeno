"use client";
import styled from "styled-components";
import { ProductCard } from "./product-card";
import { useProducts } from "../../hooks/useProducts";
import { filterProductsByType } from "@/utils/filter-products";
import { useContext, useEffect } from "react";
import { FilterContext } from "@/context/filter-context";
import { Product, Products } from "@/types/products";

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
  const { filtered } = useContext(FilterContext);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {data && (
        <CardsWraper>
          {filtered &&
            filtered?.map((product) => (
              <ProductCard
                image_url={product.image_url}
                name={product.name}
                price_in_cents={product.price_in_cents}
                id={product.id}
                description={product.description}
                category={product.category}
                key={product.id}
                sales={product.sales}
                created_at={product.created_at}
              />
            ))}
        </CardsWraper>
      )}
    </>
  );
}
