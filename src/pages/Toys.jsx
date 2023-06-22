import { Link } from "react-router-dom";
import Article from "../components/Article";
import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";
import "../styles/Collection.css";

export default function Toys({
  addToCart,
  cartItems,
  removeFromCart,
  subFromCart,
}) {
  const articlesArray = Object.values(articles[0]);
  const toysList = articlesArray.filter(
    (article) => article.category === "toys"
  );

  console.log(toysList);
  return (
    <>
      <h1 className="page-title">Toys</h1>
      <div className="collection--container">
        {generateArticle(toysList, (props) => (
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
