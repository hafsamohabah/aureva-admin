import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <Link className="navigation__brand" to="/">
        Aureva
      </Link>

      <div className="navigation__links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navigation;