import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Welcome to Aureva</h1>

      <p>
        Aureva is a collection of flavorful spice pastes made for everyday
        cooking.
      </p>

      <h2>Manage Your Products</h2>

      <p>
        Use this admin portal to view, add, edit, and manage Aureva products.
      </p>

      <div>
        <Link to="/products">View Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </main>
  );
}

export default Home;