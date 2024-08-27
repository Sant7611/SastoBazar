import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/MyHeader";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import Home from "./pages/Home/Home";
import { Login } from "./pages/User/Login/Login";
import { Register } from "./pages/User/Register/Register";

function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sastobazar-login" element={<Login />} />
          <Route path="/sastobazar-register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
