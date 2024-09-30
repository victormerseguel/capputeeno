export const formatPrice = (price_in_cents: number) => {
  const formatedPrice = (price_in_cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatedPrice;
};
