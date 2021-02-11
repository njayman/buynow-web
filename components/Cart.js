import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";

export default function Cart({ showCart, setShowcart }) {
  const { items } = useSelector((state) => state.cart);
  return (
    <Modal.Dialog show={showCart} className="cart">
      <Modal.Header style={{ position: "relative" }}>
        <FontAwesomeIcon
          onClick={() => setShowcart(false)}
          icon={faTimes}
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
    </Modal.Dialog>
  );
}
