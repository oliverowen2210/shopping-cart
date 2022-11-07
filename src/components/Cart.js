export default function Cart(props) {
  return (
    <div className="cart">
      <div className="cartImage" />
      <span className="itemPrice">{props.totalCost}</span>
    </div>
  );
}
