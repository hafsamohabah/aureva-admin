import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>

        <h2>{product.name}</h2>

        <p className="product-card__description">
          {product.description}
        </p>

        <div className="product-card__details">
          <strong>KSh {product.price}</strong>
          <span>{product.size}</span>
          <span>{product.stock} in stock</span>
        </div>

        <Link
          className="product-card__link"
          to={`/products/${product.id}`}
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;