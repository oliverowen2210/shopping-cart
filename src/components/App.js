import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

export default function App() {
  let [items, setItems] = useState([]);

  let getTotalCost = () => {
    if (!items.length) return 0;
    else
      return items.reduce((value, item) => {
        return value + item.data.price * item.count;
      }, 0);
  };

  let addItem = (newItem, count) => {
    let clonedItems = [...items];

    /**If an item with newItem's id is already in items,
     * increases its count by the newItem's count
     * otherwise appends the newItem to items
     */
    if (
      !clonedItems.some((item) => {
        if (item.data.id === newItem.id) {
          item.count = item.count + count;
          setItems(clonedItems);
          return true;
        }
        return false;
      })
    )
      setItems(items.concat({ data: newItem, count }));
  };
  return (
    <div className="App">
      <Nav totalCost={getTotalCost()} />
      <Outlet context={addItem} />
    </div>
  );
}
