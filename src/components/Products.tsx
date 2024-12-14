import { Suspense } from "react";
import Loading from "./Loading";
import ProductsList from "./ProductsList";

const Products: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsList />
    </Suspense>
  );
};

export default Products;
