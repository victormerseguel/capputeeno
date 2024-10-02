"use client";
import { FilterContext } from "@/context/filter-context";
import { formatPrice } from "../../utils/format-price";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { styled } from "styled-components";
import { Product } from "../../types/products-types";

const Card = styled.button`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 378px;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-family: inherit;

  background-color: white;
  backdrop-filter: blur(10px);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const CardLable = styled.div`
  width: 100%;
  height: 78px;
  font-family: inherit;
  text-align: start;

  h3 {
    color: var(--text-dark2);
    font-size: 16px;
    font-weight: 300;
    margin: 0px 12px;
    padding: 8px 0px;

    border-bottom: 1px solid var(--shapes);
  }

  p {
    color: var(--shapes-dark);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
  }
`;

export function ProductCard(props: Product) {
  const { setCurrentProduct, currentProduct } = useContext(FilterContext);
  const router = useRouter();

  const handleProductCardClick = (name: string) => {
    setCurrentProduct({
      id: props.id,
      name: props.name,
      price_in_cents: props.price_in_cents,
      description: props.description,
      image_url: props.image_url,
      category: props.category,
      sales: props.sales,
      created_at: props.created_at,
    });
    router.push(`/product/${props.id}`);
    window.scroll(0, 0);
  };

  return (
    <Card onClick={() => handleProductCardClick(props.name)}>
      <img src={props.image_url} alt={props.name} />
      <CardLable>
        <h3>{props.name}</h3>
        <p>{formatPrice(props.price_in_cents)}</p>
      </CardLable>
    </Card>
  );
}
