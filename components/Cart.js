import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";
import { FaCross, FaTimes } from "react-icons/fa";
import { removeFromCart } from "../redux/actions/cartaction";
export default function Cart({ showCart, setShowcart }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.content);

  return (
    <Modal.Dialog show={showCart} className="cart">
      <Modal.Header style={{ position: "relative" }}>
        <FaTimes
          onClick={() => setShowcart(false)}
          style={{
            color: "black",
            height: "15px",
            width: "15px",
            borderRadius: "25px",
            background: "white",
          }}
        />
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: "white",
          background: "black",
        }}
      >
        <div className="row">
          <div className="col-12">
            {products
              .filter((product) => {
                return items.includes(product._id);
              })
              .map((product, id) => (
                <div
                  className="card row"
                  style={{ margin: "10px 5px 5px 10px", position: "relative" }}
                >
                  <FaTimes
                    id={product._id}
                    onClick={(e) => dispatch(removeFromCart(e.target.id))}
                    style={{
                      position: "absolute",
                      top: "-7",
                      right: "-7",
                      color: "white",
                      padding: "1px",
                      height: "15px",
                      width: "15px",
                      borderRadius: "25px",
                      background: "black",
                      border: "1px solid white",
                    }}
                  />
                  <div className="col-4">
                    <Image src="/slide.png" height={60} width={60} />
                  </div>
                  <div className="col-8" style={{ color: "black" }}>
                    <p>{product.name}</p>
                    <p>
                      <sup>$</sup> {product.fees}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button className="btn col-12">Checkout</button>
        </div>
      </Modal.Body>
    </Modal.Dialog>
  );
}
