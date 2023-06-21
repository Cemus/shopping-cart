import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";
import Article from "../components/Article";
export default function Jewelry() {
  const articlesArray = Object.values(articles[0]);
  const jewelryList = articlesArray.filter(
    (article) => article.category === "jewelry"
  );
  return (
    <>
      <h1>Jewelry</h1>
      <div className="collection--container">
        {generateArticle(jewelryList, Article)}
      </div>
    </>
  );
}
