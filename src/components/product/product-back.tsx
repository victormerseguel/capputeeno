"use client";
import { useRouter } from "next/navigation";
import { BackIcon } from "./back-icon";
import styled from "styled-components";

const ProductButton = styled.button`
  display: inline-flex;
  width: fit-content;
  gap: 8px;

  font-family: inherit;
  font-size: 14px;
  color: var(--shape-back);

  margin: 25px 0;
  border: none;
  cursor: pointer;
`;

export const ProductBack = () => {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <ProductButton onClick={handleBackButton}>
      <BackIcon />
      <p>Voltar</p>
    </ProductButton>
  );
};
