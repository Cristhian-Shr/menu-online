import React from "react";
import ReactDOM from "react-dom/client";
import Saudacao from "../src/components/saudacao/saudacao.jsx";
import "./style/global.css";
import Home from "./pages/home/home.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="saudacao-titulo">
    <Home />
  </div>
);
