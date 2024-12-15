import { useParams } from "react-router-dom";
import { useProduct } from "@/services/productService";
import { Suspense } from "react";
import Loading from "./Loading";

const ProductContent: React.FC = () => {
  console.log("Product");
  const { id } = useParams<{ id: string }>();
  const { data: product } = useProduct(id || "");

  if (!product) {
    return null;
  }

  return (
    <div className="product-view">
      <div className="left">
        <img src={product.image} alt={product.title} height={300} />
      </div>
      <div className="right">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductContent />
    </Suspense>
  );
};

export default Product;
