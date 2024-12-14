import Card from "./Card";
import { ProductType } from "@/types/ProductType";
import { fetchProducts } from "@/services/productService";

// Create the resource outside the component to prevent infinite fetching
export const productsResource = fetchProducts();

const ProductsList: React.FC = () => {
  const products: ProductType[] = productsResource.read();
  
  return (
    <div className="grid">
      {products.map((product: ProductType) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
