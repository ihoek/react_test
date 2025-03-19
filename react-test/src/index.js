import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import MainPage from "./MainPage1";
import MainPage2 from "./Main2/MainPage";
//import MainDetail from "./MainPage1";
//import reportWebVitals from "./reportWebVitals";
import MainPage3 from "./Main3/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 메인 첫번째 */}
    {/*<MainPage /> */}
    {/*<MainPage2 />*/}
    <MainPage3 />
  </React.StrictMode>
);
