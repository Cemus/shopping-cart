import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";
import Article from "../components/Article";
export default function Jewelry({
  addToCart,
  cartItems,
  subFromCart,
  removeFromCart,
}) {
  const articlesArray = Object.values(articles[0]);
  const jewelryList = articlesArray.filter(
    (article) => article.category === "jewelry"
  );
  return (
    <>
      <h1 className="page-title">Jewelry</h1>
      <div className="collection--container">
        {generateArticle(jewelryList, (props) => (
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
