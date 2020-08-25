import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartPovider = (props) => {
  const [cart, setCart] = useState([]);

  return(
  <CartContext.Provider value={[cart, setCart]}>
    {props.children}
  </CartContext.Provider>
  )
};
