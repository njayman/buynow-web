import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Container, CardDeck, Card } from "react-bootstrap";
import {
  FaArrowRight,
  FaCreditCard,
  FaTruck,
  FaHeadset,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";
import MyLayout from "../components/Layout";
export default function Home() {
  const router = useRouter();
  return (
    <MyLayout>
      <Head>
        <title>Buynow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="jumbotron jumbotron-fluid"
        style={{
          background: "url(/slide.png)",
          height: "100% !important",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            color: "white",
          }}
        >
          <p>Discovery a new universe</p>
          <p>with these gaming products</p>
          <Button variant="light" onClick={() => router.push("/products")}>
            Find Out <FaArrowRight />
          </Button>
        </Container>
      </div>
      <Container>
        <CardDeck>
          <Card>
            <div className="d-flex flex-row">
              <FaTruck size={40} className="commitment-icon" />
              <div className="commitment-cards">
                <p className="title">Fast Shipping</p>
                <p className="description">Get your order quickly</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="d-flex flex-row">
              <FaHeadset size={40} className="commitment-icon" />
              <div className="commitment-cards">
                <p className="title">24/7 Support</p>
                <p className="description">We're here to help you!</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="d-flex flex-row">
              <FaCreditCard size={40} className="commitment-icon" />
              <div className="commitment-cards">
                <p className="title">Payment Security</p>
                <p className="description">You always will be safe!</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="d-flex flex-row">
              <FaGlobe size={40} className="commitment-icon" />
              <div className="commitment-cards">
                <p className="title">World wide shipping</p>
                <p className="description">Recieve your order anywhere</p>
              </div>
            </div>
          </Card>
        </CardDeck>
      </Container>
      <Container>
        <p className="cta-title">Categories</p>
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center cta-categories">
          <div className="cat-nav">
            <FaArrowLeft />
          </div>
          <div className="category">
            <div className="circle">
              <img className="logo" src="/dog.png" alt="" />
            </div>
            <p>Pets</p>
          </div>
          <div className="category">
            <div className="circle">
              <img className="logo" src="/electronics.png" alt="" />
            </div>
            <p>Electronics</p>
          </div>
          <div className="category">
            <div className="circle">
              <img className="logo" src="/gaming.png" alt="" />
            </div>
            <p>Console</p>
          </div>
          <div className="category">
            <div className="circle">
              <img className="logo" src="/shoe.png" alt="" />
            </div>
            <p>Shoes</p>
          </div>
          <div className="category">
            <div className="circle">
              <img className="logo" src="/gaming.png" alt="" />
            </div>
            <p>Gaming</p>
          </div>
          <div className="cat-nav">
            <FaArrowRight />
          </div>
        </div>
      </Container>
      <Container>
        <p className="cta-title">Best selling</p>
        <div className=" d-flex flex-row flex-wrap">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <p className="cta-title">Recommended for you</p>
        <div className=" d-flex flex-row flex-wrap">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src="/electronics.png" className="card-img" />
              </div>
              <div className="col-8 card-body">
                <p className="card-title">SAMSUMG QLED SMART TV</p>
                <p className="card-text">
                  <sup>$</sup> 250.33 <del>$ 290.33</del>
                </p>
                <button className="btn btn-sm">Premium: $ 180.33</button>
                <div className="actions">
                  <p>See Details</p>
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "black !important",
                      color: "white !important",
                      outline: "none !important",
                      border: "none",
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MyLayout>
  );
}
