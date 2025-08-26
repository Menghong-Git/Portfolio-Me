import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <AllRoutes />
  </Router>
);
