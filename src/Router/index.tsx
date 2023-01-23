import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Shop } from "../pages/Shop";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};
