"use client";
import { Fragment } from "react";
import { ProductCard } from "./product-card";
import { useProducts } from "../../hooks/useProducts";
import styled from "styled-components";

interface ProductListProps {}

const CardsWraper = styled.div`
  margin-top: 80px;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export function ProductList() {
  const { data, loading } = useProducts("http://localhost:3333/");

  return (
    <>
      {loading && <p>Carrgando...</p>}
      {data && (
        <CardsWraper>
          {data.data.allProducts.map((card) => (
            <ProductCard
              image={card.image_url}
              name={card.name}
              price={card.price_in_cents}
              id={card.id}
              key={card.id}
            />
          ))}
        </CardsWraper>
      )}
    </>
  );
}
