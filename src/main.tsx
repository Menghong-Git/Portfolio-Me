import { createRoot } from "react-dom/client";
import "./index.css";
import AllRoutes from "./Routes";
import {HashRouter} from "react-router-dom";


createRoot(document.getElementById("root")!).render(
    <HashRouter basename="/Portfolio-Me" >
      <AllRoutes />
    </HashRouter>
);
