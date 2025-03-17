import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import MainPage from "./MainPage1";
//import MainDetail from "./MainPage1";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 메인 첫번째 */}
    <MainPage />
  </React.StrictMode>
);
