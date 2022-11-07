import { useState } from "react";

import ItemCounter from "./ItemCounter";

export default function Item(props) {
  let [count, setCount] = useState(1);
  return (
    <li className="shopItem">
      <img src={props.data.image} className="itemImage" />
      <div className="itemInfo">
        <h3 className="itemName">{props.data.name}</h3>
        <h2 className="itemPrice">{props.data.price}</h2>
      </div>
      <div className="itemButtons">
        <ItemCounter
          className="itemCounter"
          count={count}
          decreaseFunc={() => {
            if (count < 2) setCount(1);
            else setCount(count - 1);
          }}
          increaseFunc={() => {
            setCount(count + 1);
          }}
        />
        <button onClick={props.addFunc} className="itemAdd">
          + Add to cart
        </button>
      </div>
    </li>
  );
}
