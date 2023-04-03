import { useEffect, useReducer, useContext, createContext } from "react";
import { useCollection } from "../hooks/useCollection.js";

const getProducts = () => {
  const { documents: products } = useCollection("kombuchas");
  dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
};
const getFeatured = () => {
  if (products) {
    let arr = [];
    for (let index = 0; index < 3; index++) {
      arr.push(products[index]);
    }
    dispatch({ type: "GET_FEATURED", payload: arr });
  }
};
useEffect(() => {
  getProducts();
  getFeatured();
}, []);
const initialState = {
  products: [],
  featuredProducts: [],
};
const ProductContext = createContext();
export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_FEATURED":
      return { ...state, featuredProducts: action.payload };
    default:
      return state;
  }
};
export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  //SECTION functions

  //SECTION end
  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Must use auth within the provider");
  }
  return context;
};
