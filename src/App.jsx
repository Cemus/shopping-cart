import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import logo from "./assets/images/logo/logo.png";

function App() {
  const messageRemise = () => {
    const messages = [
      `Profitez des offres "Oulala!" et obtenez 20% de remise sur vos produits préférés !`,
      `Du nouveau en stock !`,
      `N'oubliez pas la crème solaire !`,
    ];
    const chosenMessage = messages[Math.floor(Math.random() * messages.length)];
    return chosenMessage;
  };
  return (
    <>
      <header>
        <div className="upper-header">
          <p>{messageRemise()}</p>
        </div>
        <div className="mid-header">
          <Link to="/faq">Besoin d'aide ?</Link>
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="lower-header">
          <Link className="nav-items" to="/toys">
            TOYS
          </Link>
          <Link className="nav-items" to="/clothes">
            CLOTHES
          </Link>
          <Link className="nav-items" to="/equipments">
            EQUIPMENT
          </Link>
          <Link className="nav-items" to="/accessories">
            ACCESSORIES
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
