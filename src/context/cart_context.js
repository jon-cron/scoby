//imports
import { createContext, useEffect, useReducer, useContext } from "react";
//Local storage function check
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
//initial state
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};
//creation of context
const CartContext = createContext();
//reducer section
export const cartReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//context/provider section
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // SECTION functions
  //SECTION end
  return (
    // NOTE when you create functions you want access to place them in the value
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
//use context hook
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Must use auth within the provider");
  }
  return context;
};
