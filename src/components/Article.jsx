import { getUrl } from "../utils/getUrlVite.js";
import "../styles/Article.css";

export default function Article({
  isCart,
  id,
  name,
  price,
  description,
  image,
  addToCart,
  cartItems,
  removeFromCart,
  subFromCart,
}) {
  function occurenceItem(id) {
    let totalOccurence = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      if (element.id === id) {
        totalOccurence = totalOccurence + 1;
      }
    }
    return totalOccurence;
  }
  const handleAddToCart = () => {
    const item = { id, name, price, description, image };
    addToCart(item);
  };
  const handleSubFromCart = () => {
    subFromCart(id);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  if (!isCart) {
    return (
      <div className="article--container">
        <img className="article--image" src={getUrl(image, "jpg")} alt={name} />
        <div className="article--informations">
          <h3 className="article--name">{name}</h3>
          <p className="article--description">{description}</p>
          <h4 className="article--price">{`${price} $`}</h4>
          <div className="article-buttons-container">
            <button
              className="article--buy"
              onClick={handleAddToCart}
              type="button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="article--container">
        <img className="article--image" src={getUrl(image, "jpg")} alt={name} />
        <div className="article--informations">
          <h3 className="article--name">
            {name} <span>{`(x ${occurenceItem(id)})`}</span>
          </h3>
          <p className="article--description">{description}</p>
          <h4 className="article--price">{`${price} $`}</h4>
          <div className="article-buttons-container">
            <button
              className="article--sub"
              onClick={handleSubFromCart}
              type="button"
            >
              - 1
            </button>
            <button
              className="article--remove"
              onClick={handleRemoveFromCart}
              type="button"
            >
              REMOVE
            </button>
            <button
              className="article--add"
              onClick={handleAddToCart}
              type="button"
            >
              + 1
            </button>
          </div>
        </div>
      </div>
    );
  }
}
