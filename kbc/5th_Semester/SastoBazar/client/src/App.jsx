import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import Home from "./pages/Home/Home";
import { Login } from "./pages/User/Login/Login";
import { Register } from "./pages/User/Register/Register";
import PageNotFound from "./pages/not_found/PageNotFound";
import LearnMore from "./pages/learn-more/LearnMore";
import AboutUs from "./pages/aboutUs/AboutUs";
import ProductView from "./pages/product/productView/ProductView";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // using promise. three stage.

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedData();
  }, []);

  return (
    <>
      <Router>
        <TopHeader title="Sastobazar Rewards" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/more-info" element={<LearnMore />} />
          <Route
            path="/product-view/:id"
            element={<ProductView isLoading={isLoading} products={products} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
