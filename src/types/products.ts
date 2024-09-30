export interface Products {
  data: {
    allProducts: Array<Product>;
  };
}

export type Product = {
  id: string;
  name: string;
  price_in_cents: number;
  description: string;
  image_url: string;
  category: string;
  sales: number;
  created_at: string;
};
