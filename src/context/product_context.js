import { useEffect, useReducer, useContext, createContext } from "react";
import { useCollection } from "../hooks/useCollection.js";

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
  const getProducts = (products) => {
    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
  };
  const getFeatured = (documents) => {
    const newArr = documents.slice(0, 3);
    dispatch({ type: "GET_FEATURED", payload: newArr });
  };
  // useEffect(() => {
  //   getProducts();
  //   getFeatured();
  // }, []);
  //SECTION end
  return (
    <ProductContext.Provider value={{ ...state, getProducts, getFeatured }}>
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
