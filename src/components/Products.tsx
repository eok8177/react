import Card from "./Card";
import { ProductType } from "@/types/ProductType";
import { useProducts } from "@/services/productService";
import { Suspense } from "react";
import Loading from "./Loading";

const ProductsContent: React.FC = () => {
  const { data: products } = useProducts();
  console.log("Products render", { products: products?.length });

  if (!products) {
    return null;
  }

  return (
    <div className="grid">
      {products.map((product: ProductType) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
