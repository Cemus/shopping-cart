import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Beachwear from "./pages/Beachwear";
import Cart from "./pages/Cart";
import logo from "./assets/images/logo/logo.png";
import Jewelry from "./pages/Jewelry";
import Essentials from "./pages/Essentials";
import Toys from "./pages/Toys";

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
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="global-container">
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
          <Link className="nav-items" to="/">
            HOME
          </Link>
          <Link className="nav-items" to="/beachwear">
            BEACHWEAR
          </Link>
          <Link className="nav-items" to="/jewelry">
            JEWELRY
          </Link>
          <Link className="nav-items" to="/essentials">
            ESSENTIALS
          </Link>
          <Link className="nav-items" to="/toys">
            TOYS
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/beachwear" element={<Beachwear />}></Route>
        <Route path="/jewelry" element={<Jewelry />}></Route>
        <Route path="/essentials" element={<Essentials />}></Route>
        <Route path="/toys" element={<Toys />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <button onClick={scrollToTop} className="back-top" type="button">
        Back to top
      </button>
    </div>
  );
}

export default App;
