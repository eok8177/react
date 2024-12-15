import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types/ProductType";

const API_URL = "https://fakestoreapi.com/products";

async function getProducts(): Promise<ProductType[]> {
  const response = await fetch(`${API_URL}?limit=18`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

async function getProduct(id: string): Promise<ProductType> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export function useProducts() {
  return useQuery<ProductType[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useProduct(id: string) {
  return useQuery<ProductType, Error>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}
