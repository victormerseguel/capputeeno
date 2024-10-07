export type Product = {
  name: string;
  id: string;
  price_in_cents: number;
  description: string;
  image_url: string;
  category: string;
  sales: number;
  created_at: string;
  amount?: number | undefined;
};

export const ProductEmpty = {
  id: "",
  name: "",
  price_in_cents: 0,
  description: "",
  image_url: "",
  category: "",
  sales: 0,
  created_at: "",
  // amount: 1,
};
