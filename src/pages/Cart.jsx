import generateArticle from "../utils/generateArticle";
import Article from "../components/Article";
import "../styles/Cart.css";

export default function Cart({
  addToCart,
  cartItems,
  removeFromCart,
  subFromCart,
}) {
  function getUrl(image, extension) {
    return new URL(
      `../assets/images/404/${image}.${extension}`,
      import.meta.url
    ).href;
  }
  const cartList = cartItems.filter(
    (item, index, self) => index === self.findIndex((i) => i.id === item.id)
  );
  function generationArticlesNames() {
    return cartItems.map((item, index) => (
      <div key={index} className="cart--payment-article">
        <p>{item.name}</p>
        <p>{`${item.price} $`}</p>
      </div>
    ));
  }
  function cartTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const price = cartItems[i].price.replace(",", ".");
      total = parseFloat(price) + total;
    }
    total = total.toString();
    total = total.replace(".", ",");
    total = parseFloat(total).toFixed(2);
    return total;
  }
  if (cartItems.length > 0) {
    return (
      <>
        <h1 className="page-title">{`Your cart (${cartItems.length} articles)`}</h1>
        <div className="cart--container">
          <div className="cart--article-container">
            {generateArticle(cartList, (props) => (
              <Article
                {...props}
                cartItems={cartItems}
                isCart={true}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                subFromCart={subFromCart}
              />
            ))}
          </div>
          <div className="cart--payment-container">
            <h3 className="cart--payment-title">Summary :</h3>
            <div>{generationArticlesNames()}</div>
            <div className="bar"></div>
            <div className="cart--payment-total-container">
              <h3 className="cart--payment-total">Total</h3>
              <h3>{`${cartTotal()} $`}</h3>
            </div>
            <button className="cart--checkout" type="button">
              CHECKOUT
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3 className="cart--empty-cart">Your cart is empty...</h3>
        <img className="cart--empty-image" src={getUrl("sadsheep", "png")} />
      </>
    );
  }
}
