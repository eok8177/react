import { useEffect, useState } from "react";
import Card from "./Card";
import { ProductType } from "@/types/ProductType";

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <div className="grid">
        {
          products.length ? products.map((product) => (
            <Card product={product} key={product.id} />
          )) : <>Loading...</>
        }
      </div>
    </>
  );
};

export default Products;