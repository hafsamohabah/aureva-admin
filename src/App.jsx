import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import Navigation from "./components/Navigation";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;