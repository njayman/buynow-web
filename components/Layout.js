import { useState } from "react";

import NavBar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";

export default function MyLayout({ children }) {
  const [showCart, setShowcart] = useState(false);

  return (
    <>
      <NavBar setShowcart={(c) => setShowcart(c)} />
      {showCart && (
        <Cart showCart={showCart} setShowcart={(c) => setShowcart(c)} />
      )}
      <>{children}</>
      <Footer />
    </>
  );
}
