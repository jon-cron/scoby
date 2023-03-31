import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./pages";
import { Navbar } from "./components";
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
            </Routes>
          </>
        </Router>
      )}
    </>
  );
}

export default App;
