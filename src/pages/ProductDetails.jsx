import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateProduct, deleteProduct } = useProducts();

  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const updatedProduct = await updateProduct(id, {
        price: Number(price),
      });

      setProduct(updatedProduct);
      setMessage("Product updated successfully.");
    } catch (error) {
      setError(error.message);
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
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error && !product) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h1>{product.name}</h1>

      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Size: {product.size}</p>
      <p>Stock: {product.stock}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Price</label>

        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          min="0"
          required
        />

        <button type="submit">Update Price</button>
      </form>

      {message && <p>{message}</p>}

      {error && <p>Error: {error}</p>}

      <button type="button" onClick={handleDelete}>
        Delete Product
      </button>
    </main>
  );
}

export default ProductDetails;