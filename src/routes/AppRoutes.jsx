
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Benefits from "../pages/Benefits";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/benefits" element={<Benefits />} />
  </Routes>
);

export default AppRoutes;
