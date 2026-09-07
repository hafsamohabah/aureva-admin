import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useProductContext from "../context/useProductContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    products,
    loading,
    error,
    updateProduct,
    deleteProduct,
  } = useProductContext();

  const product = products.find(
    (currentProduct) => String(currentProduct.id) === String(id)
  );

  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [productError, setProductError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setProductError("");

    try {
      const updatedProduct = await updateProduct(id, {
        price: Number(price),
      });

      setPrice(updatedProduct.price);
      setMessage("Product updated successfully.");
    } catch (error) {
      setProductError(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(id);
      navigate("/products");
    } catch (error) {
      setProductError(error.message);
    }
  };

  if (loading) {
    return <p className="product-details__status">Loading product...</p>;
  }

  if (error) {
    return <p className="product-details__status">Error: {error}</p>;
  }

  if (!product) {
    return (
      <p className="product-details__status">
        Product not found.
      </p>
    );
  }

  return (
    <main className="product-details">
      <Link className="product-details__back" to="/products">
        ← Back to Products
      </Link>

      <section className="product-details__card">
        <div className="product-details__intro">
          <p className="product-details__category">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="product-details__description">
            {product.description}
          </p>
        </div>

        <div className="product-details__information">
          <div>
            <span>Size</span>
            <strong>{product.size}</strong>
          </div>

          <div>
            <span>Stock</span>
            <strong>{product.stock} units</strong>
          </div>

          <div>
            <span>Current Price</span>
            <strong>KSh {product.price}</strong>
          </div>
        </div>

        <div className="product-details__actions">
          <h2>Update Product</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="price">Price</label>

            <input
              id="price"
              type="number"
              value={price || product.price}
              onChange={(event) => setPrice(event.target.value)}
              min="0"
              required
            />

            <button type="submit">Update Price</button>
          </form>

          {message && (
            <p className="product-details__message">{message}</p>
          )}

          {productError && (
            <p className="product-details__error">
              Error: {productError}
            </p>
          )}
        </div>

        <div className="product-details__delete">
          <h2>Delete Product</h2>

          <p>
            Remove this product from the Aureva product collection.
          </p>

          <button type="button" onClick={handleDelete}>
            Delete Product
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;