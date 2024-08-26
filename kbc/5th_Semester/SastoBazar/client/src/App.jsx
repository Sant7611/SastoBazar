import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/MyHeader";
import Footer from "./components/footer/Footer";
import Banner from "./pages/banner/Banner";
import TopHeader from "./components/TopHeader/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
