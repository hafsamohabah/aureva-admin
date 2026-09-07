import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add-product">Add Product</Link>
    </nav>
  );
}

export default Navigation;