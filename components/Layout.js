import { useState } from "react";

import NavBar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";
import Search from "./Search";
export default function MyLayout({ children }) {
  const [showCart, setShowcart] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      <NavBar
        setSearch={(s) => setSearch(s)}
        setShowcart={(c) => setShowcart(c)}
      />
      {showCart && (
        <Cart showCart={showCart} setShowcart={(c) => setShowcart(c)} />
      )}
      {search ? <Search search={search} /> : <>{children}</>}
      <Footer />
    </>
  );
}
