import { useOutletContext } from "react-router-dom";
import uniqid from "uniqid";

import Item from "./Item";
import Thumbs from "../images/thumbs.png";
import Cart from "../images/cart.png";
import Bag from "../images/bag.png";
import Frog from "../images/froge.jpg";

let testItem = {
  id: uniqid(),
  name: "beans",
  price: 10.5,
  image: Thumbs,
};

let cart = {
  id: uniqid(),
  name: "shooping cart",
  price: 50,
  image: Cart,
};

let bag = {
  id: uniqid(),
  name: "bag",
  price: 2,
  image: Bag,
};

let frog = {
  id: uniqid(),
  name: "a frog",
  price: 30,
  image: Frog,
};

let shopItems = [testItem, cart, bag, frog];

export default function Shop() {
  const addItem = useOutletContext();
  return (
    <ul className="shop">
      {shopItems.length ? (
        shopItems.map((item) => {
          return <Item data={item} key={item.id} addFunc={addItem} />;
        })
      ) : (
        <p>No items were found.</p>
      )}
    </ul>
  );
}
