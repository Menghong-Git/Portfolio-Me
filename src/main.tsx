import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/Portfolio-Me" >
      <AllRoutes />
    </BrowserRouter>
);
