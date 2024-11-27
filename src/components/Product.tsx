import { ProductType } from "@/types/ProductType";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      {product ? (
        <div className="product-view">
          <h1>{product?.title}</h1>
          <img src={product?.image} alt={product?.title} />
          <p>{product?.description}</p>
          <p>${product?.price}</p>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Product;
