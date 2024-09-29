export interface Product {
  data: {
    allProducts: Array<{
      id: string;
      name: string;
      price_in_cents: number;
      description: string;
      image_url: string;
      category: string;
      sales: number;
      created_at: string;
    }>;
  };
}
