import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Cart } from "../pages/Cart";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
