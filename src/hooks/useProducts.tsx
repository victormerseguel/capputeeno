import { Product } from "../types/products";
import { useEffect, useState } from "react";

export function useProducts(url: string) {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
              allProducts {
                  id
                  name
                  price_in_cents
                  description
                  image_url
                  category
                  sales
                  created_at    
                  }
              }`,
        }),
        next: { revalidate: 10 },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}
