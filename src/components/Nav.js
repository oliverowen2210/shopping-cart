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
      >
        <span> Home</span>
      </div>
      <div
        onClick={() => {
          navigate("shop");
        }}
      >
        <span> Shop</span>
      </div>
      <Cart className="cart" itemCount={props.itemCount}></Cart>
    </nav>
  );
}
