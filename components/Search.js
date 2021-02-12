import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Search({ search }) {
  const { products } = useSelector((state) => state.content);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "20px" }}>
        {products
          ?.filter((product) => {
            return (
              product?.name.toLowerCase().includes(search.toLowerCase()) ||
              product?.description.toLowerCase().includes(search.toLowerCase())
            );
          })
          ?.map((product, id) => (
            <div className="col-12 card mb-3" key={id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <Image src="/slide.png" height={150} width={150} />
                </div>
                <div className="col-md-6">
                  <p>50% Off</p>
                  <p>{product.name}</p>
                  <p>FREE SHIPPING, Recieve Friday 19, Jan</p>
                  <div className="btn">
                    <FaHeart /> Save
                  </div>
                </div>
                <div className="col-md-3 product-card-action">
                  <del>
                    ${" "}
                    {Number(product.fees) +
                      Number(100) +
                      Number(product.shippingcost)}
                  </del>
                  <p>
                    <b>
                      Now ${" "}
                      {Number(product.fees) + Number(product.shippingcost)}
                    </b>
                  </p>
                  <button className="btn btn-sm">
                    Premium: ${" "}
                    {Number(product.fees) +
                      Number(product.shippingcost) -
                      Number(50)}
                  </button>
                  <button
                    id={product._id}
                    style={{ marginTop: "10px" }}
                    className="btn"
                    onClick={(e) => dispatch(addToCart(e.target.id))}
                  >
                    Add to card
                  </button>
                  <p>Available until: 12 Jan</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
