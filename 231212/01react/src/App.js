import "./App.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import UserPage from "./UserPage"; 
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return (authenticate = true ? <UserPage /> : <Navigate to="login" />);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDetail/:id/:num" element={<ProductDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserPage" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
