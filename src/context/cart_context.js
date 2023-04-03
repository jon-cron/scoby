import { createContext, useEffect, useReducer, useContext } from "react";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // SECTION functions
  //SECTION end
  return (
    // NOTE when you create functions you want access to place them in the value
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Must use auth within the provider");
  }
  return context;
};
