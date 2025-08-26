import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router basename="/Portfolio-Me">
    <AllRoutes />
  </Router>
);
