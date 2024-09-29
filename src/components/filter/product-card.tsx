"use client";
import { redirect, useRouter } from "next/navigation";
import { styled } from "styled-components";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

const CardWraper = styled.button`
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
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardLable = styled.div`
  width: 100%;
  height: 78px;
  font-family: inherit;
  text-align: start;

  h4 {
    color: #41414d;
    font-size: 16px;
    font-weight: 300;
    margin: 0px 12px;
    padding: 8px 0px;

    border-bottom: 1px solid #dce2e5;
  }

  p {
    color: #09090a;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
  }
`;

export function ProductCard({ image, name, price, id }: ProductCardProps) {
  const router = useRouter();

  const handleProductCardClick = (name: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <CardWraper onClick={() => handleProductCardClick(name)}>
      <ProductImage src={image} alt={name} />
      <CardLable>
        <h4>{name}</h4>
        <p>
          {(price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </CardLable>
    </CardWraper>
  );
}
