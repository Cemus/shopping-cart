import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";
import Article from "../components/Article";

export default function Essentials({
  addToCart,
  cartItems,
  subFromCart,
  removeFromCart,
}) {
  const articlesArray = Object.values(articles[0]);
  const essentialsList = articlesArray.filter(
    (article) => article.category === "essentials"
  );
  return (
    <>
      <h1 className="page-title">Essentials</h1>
      <div className="collection--container">
        {generateArticle(essentialsList, (props) => (
          <Article
            {...props}
            cartItems={cartItems}
            isCart={false}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            subFromCart={subFromCart}
          />
        ))}
      </div>
    </>
  );
}
