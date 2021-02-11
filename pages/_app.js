import { useState, useEffect } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };
  const [cart, setCart] = useState([]);
  const login = () => {
    setIsAuthenticated(true);
  };
  useEffect(() => {
    if (isAuthenticated) {
      let user = localStorage.getItem("user");
      console.log(user);
    }
  }, [isAuthenticated]);
  const addToCart = (id) => {
    setCart(...cart, id);
  };
  return (
    <Component
      isAuthenticated={isAuthenticated}
      logout={logout}
      login={() => login()}
      addToCart={(id) => addToCart(id)}
      cart={cart}
      {...pageProps}
    />
  );
}

export default MyApp;
