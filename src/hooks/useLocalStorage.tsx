"use client";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = useState();

  useEffect(() => {
    const local = localStorage.getItem(item);
    setValue(local ? JSON.parse(local) : "");
  }, []);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}
