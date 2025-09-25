import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProducts />} />
            <Route path="products/:productID" element={<ProductDetails />} />
            <Route path="products/edit/:productID" element={<EditProduct />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
