import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home, Products, SingleProduct } from "./pages";
import { Navbar, Footer } from "./components";
import { useAuthContext } from "./context/auth_context.js";
function App() {
  const { authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
          </>
        </Router>
      )}
    </>
  );
}

export default App;
