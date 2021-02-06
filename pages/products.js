import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function SellerPoducts() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.AXIOS_BASE_URL}/admin/products/get`
      );
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        {products?.map((product, id) => (
          <div className="product" key={id}>
            <h1>Product {id + 1}</h1>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Warrenty poicy: {product.policy.warrenty}</p>
            <p>Return Policy: {product.policy.return}</p>
            <p>Publication Type: {product.publicationType}</p>
            <p>Shipping: {product.shipping}</p>
            <p>Shipping Cost: {product.shippingcost}</p>
            <p>Shipping Cost Extra: {product.shippingcostextra}</p>
            <p>Shipping Method: {product.shippingmethod}</p>
            <p>Shipping Time: {product.shippingtime}</p>
            <p>Category: {product.category}</p>
            <p>Fees: {product.fees}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
