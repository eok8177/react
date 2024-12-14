import type { ProductType } from "@/types/ProductType.ts";
import { Link } from "react-router";

const Card: React.FC<{product: ProductType}> = ({product}) => {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div>
        <h2>
          <Link to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h2>
        <p className="price">$ {product.price}</p>
      </div>
    </div>
  );
}

export default Card;
