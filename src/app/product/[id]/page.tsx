"use client";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FilterContext } from "../../../context/filter-context";
import { formatPrice } from "../../../utils/format-price";
import { CartIcon } from "../../../components/header/cart-icon";
import { categoryConvert } from "@/utils/category-types";
import { ProductBack } from "@/components/product/product-back";
import { usePathname } from "next/navigation";
import { AddCartStatus } from "@/components/product/add-cart-status";
import { alert } from "@/utils/alert-cart";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ProductWraper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 100px;
  padding: 0 160px;

  display: flex;
  flex-direction: column;
  position: relative;

  color: var(--text-dark2);
`;

const ProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const ProductLeft = styled.div`
  // flex-grow: 1;
  display: flex;
  place-content: center;
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductRight = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p:nth-of-type(1) {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 4px;
  }

  p:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--shapes-dark);
  }

  p:nth-of-type(3) {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 58px;
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--text-dark3);
  }

  p:nth-of-type(4) {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 50px;
  }
`;

const ProductAddCart = styled.button`
  display: flex;
  place-content: center;
  gap: 12px;

  width: 100%;
  max-width: 445px;
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  background-color: #115d8c;

  font-family: inherit;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--text-cart);

  margin-top: auto;

  cursor: pointer;

  svg {
    path {
      stroke: var(--text-cart);
    }
  }
`;

export default function Page() {
  const { currentProduct, setCurrentProduct, allProducts, setCart, cart } =
    useContext(FilterContext);
  const param = usePathname().replace("/product/", "");
  const [status, setStatus] = useState<string | null>(null);
  const [statusAnimation, setStatusAnimation] = useState("");

  const filterCurrentProduct = (pathname: string) => {
    if (allProducts) {
      setCurrentProduct(
        allProducts.filter((param) => param.id.includes(pathname))[0],
      );
    }
  };

  useEffect(() => {
    filterCurrentProduct(param);
  }, [currentProduct, param, allProducts]);

  const handleAddToCart = () => {
    if (cart.length === 1 && cart[0].id === "") {
      setCart([currentProduct]);
      localStorage.setItem("cart-items", JSON.stringify(cart));
      alert("ok", setStatusAnimation, setStatus);
    } else if (cart.map((item) => item.id).includes(currentProduct.id)) {
      alert("already", setStatusAnimation, setStatus);
    } else {
      setCart([...cart, currentProduct]);
      localStorage.setItem(
        "cart-items",
        JSON.stringify([...cart, currentProduct]),
      );
      alert("ok", setStatusAnimation, setStatus);
    }
  };

  return (
    <ProductWraper>
      <ProductBack />
      {currentProduct && (
        <ProductContent>
          <ProductLeft>
            <img src={currentProduct.image_url} alt="" />
          </ProductLeft>
          <ProductRight>
            <p>{categoryConvert(currentProduct.category)}</p>
            <h4>{currentProduct.name}</h4>
            <p>{formatPrice(currentProduct.price_in_cents)}</p>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <h5>DESCRIÇÃO</h5>
            <p>{currentProduct.description}</p>
            <ProductAddCart onClick={handleAddToCart}>
              <CartIcon />
              <span>Adicionar ao carrinho</span>
            </ProductAddCart>
          </ProductRight>
          {status && (
            <AddCartStatus animation={statusAnimation} status={status} />
          )}
        </ProductContent>
      )}
    </ProductWraper>
  );
}
