// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
import MyLayout from "../components/Layout";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
// import { Accordion, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartaction";
export default function SellerPoducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.content);

  return (
    <MyLayout>
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="row col-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                eventKey="0"
              >
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                eventKey="0"
              >
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                eventKey="0"
              >
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                eventKey="0"
              >
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle
                as="div"
                style={{ cursor: "pointer" }}
                eventKey="0"
              >
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div> */}
        <div className="row" style={{ marginTop: "20px" }}>
          {products?.map((product, id) => (
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
      {/* </div> */}
      {/* <div className="product">
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
      </div> */}
    </MyLayout>
  );
}
