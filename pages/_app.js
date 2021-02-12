import { useState, useEffect } from "react";
import "../styles/globals.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { wrapper } from "../redux/store";
import { setAllProducts } from "../redux/actions/contentactions";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.AXIOS_BASE_URL}/admin/products/get`
      );
      dispatch(setAllProducts(data.products));
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
