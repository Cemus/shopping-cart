import { Link } from "react-router-dom";
import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";
import Article from "../components/Article";

export default function Beachwear() {
  const articlesArray = Object.values(articles[0]);
  const beachwearList = articlesArray.filter(
    (article) => article.category === "clothes"
  );
  return (
    <>
      <h1>Beachwear</h1>
      <div className="collection--container">
        {generateArticle(beachwearList, Article)}
      </div>
    </>
  );
}
