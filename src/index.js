import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css"; // 3.2
import "font-awesome/css/font-awesome.css"; // 3.15
// import Counter from "./components/counter"; // 3.3
import Movie from "./components/movies";
import Counters from "./components/counters"; // 4.2
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // 6.3
import logger from "./services/logService";

logger.init();

console.log(process.env);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <main className="container">
      <App />
    </main>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
