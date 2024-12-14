import { Suspense, useMemo } from "react";
import { useParams } from "react-router";
import { fetchProduct } from "@/services/productService";
import Loading from "./Loading";
import ProductView from "./ProductView";

const Product: React.FC = () => {
  const { id } = useParams();
  
  const productResource = useMemo(
    () => fetchProduct(id!),
    [id] // Only re-create resource when id changes
  );

  return (
    <Suspense fallback={<Loading />}>
      <ProductView productResource={productResource} />
    </Suspense>
  );
};

export default Product;
