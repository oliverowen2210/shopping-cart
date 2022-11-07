import { useOutletContext } from "react-router-dom";
import Item from "./Item";
import getItems from "../Items.js";

export default function Shop() {
  const addItem = useOutletContext();
  const items = getItems();
  return (
    <ul className="shop">
      {items.length ? (
        items.map((item) => {
          return <Item data={item} key={item.id} addFunc={addItem} />;
        })
      ) : (
        <p>No items were found.</p>
      )}
    </ul>
  );
}
