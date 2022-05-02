import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.css";
import "./styles/style.css";
import "./styles/lightslider.css";

import { BrowserRouter as Router } from "react-router-dom";

import "../src/assets/bootstrap/css/bootstrap.css";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
