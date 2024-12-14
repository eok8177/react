import { ProductType } from "@/types/ProductType";

type ProductViewProps = {
  productResource: {
    read: () => ProductType;
  };
};

const ProductView: React.FC<ProductViewProps> = ({ productResource }) => {
  const product = productResource.read();

  return (
    <div className="product-view">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductView;
