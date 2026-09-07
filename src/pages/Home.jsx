import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__label">AUREVA ADMIN PORTAL</p>

        <h1>Manage your Aureva products with ease.</h1>

        <p className="home__description">
          Aureva brings flavorful spice pastes to everyday cooking. Use this
          portal to manage the product collection.
        </p>

        <div className="home__actions">
          <Link className="home__button" to="/products">
            View Products
          </Link>

          <Link className="home__button home__button--secondary" to="/add-product">
            Add Product
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;