import uniqid from "uniqid";

import Item from "./Item";
import Thumbs from "../images/thumbs.png";

let images = [];

let testItem = {
  id: uniqid(),
  name: "beans",
  price: 10.5,
  image: Thumbs,
};

let shopItems = [testItem];

export default function Shop(props) {
  return (
    <ul className="shop">
      {shopItems.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </ul>
  );
}
