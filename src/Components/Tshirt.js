import React, {useContext} from "react";

import {CartContext} from "./CartContext"

export const Tshirt = (props) => {

  const [cart, setCart] = useContext(CartContext);

  const tshirt = {
    name: props.name,
    price: props.price
  }

  const addToCart = () => {
   setCart(currentState => [...currentState, tshirt]);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}>Add to Cart</button>
      <hr />
    </div>

    
  );
};
