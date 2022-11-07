import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Error from "./Error";
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
