import { createRoot } from "react-dom/client";
import "./index.css";
import Info from "./components/info.jsx";
import About from "./components/about.jsx";
import Interests from "./components/interests.jsx";
import Footer from "./components/footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Info />
    <About />
    <Interests />
    <Footer />
  </>
);
