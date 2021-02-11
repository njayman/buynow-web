import Head from "next/head";
import { Button, Container, CardDeck, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import MyLayout from "../components/Layout";
export default function Home() {
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
          height: "100%",
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
          <Button variant="light">
            Find Out <FaArrowRight />
          </Button>
        </Container>
      </div>
      <Container>
        <CardDeck>
          <Card>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8"></div>
            </div>
          </Card>
          <Card>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8"></div>
            </div>
          </Card>
          <Card>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8"></div>
            </div>
          </Card>
          <Card>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8"></div>
            </div>
          </Card>
        </CardDeck>
      </Container>
    </MyLayout>
  );
}
