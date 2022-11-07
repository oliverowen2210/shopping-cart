import { Outlet } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";

export default function App() {
  let [items, setItems] = useState([]);
  return (
    <div className="App">
      <Nav itemCount={items.length} />
      <Outlet />
    </div>
  );
}
