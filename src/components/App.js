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
  let addItem = (item, count) => {
    setItems(items.concat({ data: item, count }));
  };
  return (
    <div className="App">
      <Nav totalCost={getTotalCost()} />
      <Outlet context={addItem} />
    </div>
  );
}
