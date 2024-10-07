"use client";
import { FilterContext } from "@/context/filter-context";
import { useContext, useEffect, useState } from "react";

export function useLocalStorage<T>(item: string) {
  const { cart, setCart } = useContext(FilterContext);
  const [value, setValue] = useState<any>();

  const local = localStorage.getItem(item);
  useEffect(() => {
    local ? setCart(JSON.parse(local)) : null;
  }, []);

  useEffect(() => {
    const local = localStorage.getItem(item);
    setValue(local ? JSON.parse(local) : "");
  }, [cart]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
