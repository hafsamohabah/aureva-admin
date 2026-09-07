import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: KSh {product.price}</p>
      <p>Size: {product.size}</p>
      <p>Stock: {product.stock}</p>

      <Link to={`/products/${product.id}`}>View Product</Link>
    </article>
  );
}

export default ProductCard;