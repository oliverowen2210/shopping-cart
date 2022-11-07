import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
export default function Nav(props) {
  const navigate = useNavigate();
  return (
    <nav>
      <div
        onClick={() => {
          navigate("home");
        }}
        className="homeButton"
      >
        Home
      </div>
      <div
        onClick={() => {
          navigate("shop");
        }}
        className="shopButton"
      >
        Shop
      </div>
      <Cart className="cart" totalCost={props.totalCost}></Cart>
    </nav>
  );
}
