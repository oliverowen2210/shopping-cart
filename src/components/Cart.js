export default function Cart(props) {
  return (
    <div className="cart">
      <div className="cartImage" />
      <span>{props.itemCount}</span>
    </div>
  );
}
