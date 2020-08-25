import React from "react";
import "./App.css";

import { TshirtList } from "./Components/TshirtList";
import { Cart } from "./Components/Cart";
import { CartPovider } from "./Components/CartContext";


function App() {
  return (
    <CartPovider>
    <div className="App">
      <TshirtList />
      <Cart/>
    </div>
    </CartPovider>
  );
}

export default App;
