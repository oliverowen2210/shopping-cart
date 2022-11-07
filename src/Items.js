import Thumbs from "./images/thumbs.png";
import Cart from "./images/cart.png";
import Bag from "./images/bag.png";
import Frog from "./images/froge.jpg";
import uniqid from "uniqid";

let Items = [
  {
    id: uniqid(),
    name: "beans",
    price: 10.5,
    image: Thumbs,
  },
  {
    id: uniqid(),
    name: "shooping cart",
    price: 50,
    image: Cart,
  },
  {
    id: uniqid(),
    name: "bag",
    price: 2,
    image: Bag,
  },
  {
    id: uniqid(),
    name: "a frog",
    price: 30,
    image: Frog,
  },
];

let getItems = () => {
  return [...Items];
};

export default getItems;
