import React from "react";
import "./App.css";
import My, { Foot } from "./components/header/MyHeader";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
    <My />
    <Footer />
    <Foot></Foot>
    </div>
  );
}

export default App;
