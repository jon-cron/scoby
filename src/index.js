import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth_context.js";
import { CartContextProvider } from "./context/cart_context.js";
import { ProductContextProvider } from "./context/product_context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
