import { useState } from "react";
import "./styles/App.css";
import { Route, Routes, Link } from "react-router-dom";
import gitHubLogo from "./assets/images/logo/github.svg";
import cartLogo from "./assets/images/logo/cart.svg";
import Homepage from "./pages/Homepage";
import Beachwear from "./pages/Beachwear";
import Cart from "./pages/Cart";
import logo from "./assets/images/logo/logo.png";
import Jewelry from "./pages/Jewelry";
import Essentials from "./pages/Essentials";
import Toys from "./pages/Toys";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const subFromCart = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
  };
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };
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
          <a className="logo" href="https://github.com/Cemus">
            <img src={gitHubLogo} alt="link to GitHub" />
          </a>
          <Link to="/">
            <img className="brand-logo" src={logo} alt="Beach Trolley" />
          </Link>
          <div className="cart-container">
            <Link to="/cart">
              <img className="logo" src={cartLogo} alt="cart" />
            </Link>
            {cartItems.length > 0 && (
              <h3 className="cart-number-items">{cartItems.length}</h3>
            )}
          </div>
        </div>

        <div className="lower-header">
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
        <Route
          path="/beachwear"
          element={
            <Beachwear
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subFromCart={subFromCart}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/jewelry"
          element={
            <Jewelry
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subFromCart={subFromCart}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/essentials"
          element={
            <Essentials
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subFromCart={subFromCart}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/toys"
          element={
            <Toys
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subFromCart={subFromCart}
              cartItems={cartItems}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              subFromCart={subFromCart}
              cartItems={cartItems}
            />
          }
        ></Route>
      </Routes>

      <button onClick={scrollToTop} className="back-top" type="button">
        Back to top
      </button>
    </div>
  );
}

export default App;
