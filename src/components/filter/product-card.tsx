"use client";
import { formatPrice } from "../../utils/format-price";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

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

export function ProductCard({ image, name, price, id }: ProductCardProps) {
  const router = useRouter();

  const handleProductCardClick = (name: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <Card onClick={() => handleProductCardClick(name)}>
      <img src={image} alt={name} />
      <CardLable>
        <h3>{name}</h3>
        <p>{formatPrice(price)}</p>
      </CardLable>
    </Card>
  );
}
