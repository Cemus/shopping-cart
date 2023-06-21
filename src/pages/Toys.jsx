import { Link } from "react-router-dom";
import Article from "../components/Article";
import articles from "../data/articles.json";
import generateArticle from "../utils/generateArticle";

export default function Toys() {
  const articlesArray = Object.values(articles[0]);
  const toysList = articlesArray.filter(
    (article) => article.category === "toys"
  );

  console.log(toysList);
  return (
    <>
      <h1>Toys</h1>
      {generateArticle(toysList, Article)}
    </>
  );
}
