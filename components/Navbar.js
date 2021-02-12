import Link from "next/link";
import {
  FaBell,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUserSlash,
} from "react-icons/fa";

import {
  Navbar,
  FormControl,
  Button,
  Nav,
  InputGroup,
  DropdownButton,
  Dropdown,
  Container,
  Badge,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import logoutUser from "../redux/actions/logoutaction";
export default function NavBar({ setShowcart, setSearch }) {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  console.log(user);
  return (
    <>
      {/* {isAuthenticated.toString()} */}
      <Navbar className="primarynav">
        <Container>
          <Link href="/">
            <Navbar.Brand href="/">
              <Image
                src="/logo.png"
                alt="BuyNow"
                width={60}
                height={60}
                layout="fixed"
              />
            </Navbar.Brand>
          </Link>
          <InputGroup>
            <DropdownButton
              as={InputGroup.Prepend}
              title="All categories"
              id="input-group-dropdown-1"
              className="nav-down"
              varient="light"
            >
              <Dropdown.Item href="#">Category 1</Dropdown.Item>
              <Dropdown.Item href="#">Category 1n</Dropdown.Item>
              <Dropdown.Item href="#">Category 1</Dropdown.Item>
              <Dropdown.Item href="#">Category 1</Dropdown.Item>
            </DropdownButton>
            <FormControl
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What are you looking for?"
            />
            <Button style={{ borderRadius: "0" }}>
              <FaSearch />
            </Button>
          </InputGroup>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle className="lang-down my-2 mx-2" as={Nav.Item}>
                English/USD
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ padding: "0", margin: "0" }}>
                <Dropdown.Item as={ListGroup.Item}>English/USD</Dropdown.Item>
                <Dropdown.Item as={ListGroup.Item}>Chinese/FEN</Dropdown.Item>
                <Dropdown.Item as={ListGroup.Item}>French/EUR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Title
                      as="h3"
                      style={{ background: "black", color: "white" }}
                    >
                      Notifications
                    </Popover.Title>
                    <Popover.Content>
                      <strong>Everything OK! Nothing to show</strong>
                    </Popover.Content>
                  </Popover>
                }
              >
                <FaBell style={{ color: "white" }} />
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link href="#">
              <FaHeart style={{ color: "white" }} />
            </Nav.Link>
            <Link href={isAuthenticated ? "/profile" : "/auth"}>
              <Nav.Link href={isAuthenticated ? "/profile" : "/auth"}>
                <FaUser style={{ color: "white" }} />
              </Nav.Link>
            </Link>
            {isAuthenticated ? (
              <Link href="#">
                <div
                  className="nav-link"
                  onClick={() => dispatch(logoutUser())}
                >
                  <FaUserSlash style={{ color: "white" }} />
                </div>
              </Link>
            ) : null}
            <Nav.Link href="#" onClick={() => setShowcart(true)}>
              <FaShoppingCart
                style={{
                  color: "white",
                  position: "relative",
                  bottom: "0",
                  right: "0",
                }}
              />
              <sub>
                <Badge
                  pill
                  style={{
                    background: "#F6D200",
                    color: "black",
                    position: "absolute",
                  }}
                >
                  {Number(items?.length)}
                </Badge>
              </sub>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="secondarynav">
        <Container>
          <Nav>
            <Nav.Link href="#home">Categories</Nav.Link>
            <Nav.Link href="#features">Best Sellers</Nav.Link>
            <Nav.Link href="#pricing">New Releases</Nav.Link>
            <Nav.Link href="#pricing">Gift Ideas</Nav.Link>
            <Nav.Link href="#pricing">Gift Cards</Nav.Link>
            <Nav.Link href="#pricing">Subscription</Nav.Link>
            <Nav.Link href="#pricing">Request a product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
