import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//SCREENS -->
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//COMPONENTS-->
import Navbar from "./components/Navbar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)} /> {/* helps in toggling */}
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* BackDrop */}
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <Routes>
        <Route path="/" element={HomeScreen} />
        <Route exact path="/product/:id" element={ProductScreen} />
        <Route exact path="/cart" element={CartScreen} />
      </Routes>
    </Router>
  );

  /* HomeScreen */
  /* ProductScreen */
  /* CartScreen */
}

export default App;
