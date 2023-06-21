import { Link } from "react-router-dom";
import articles from "../data/articles.json";

export default function Essentials() {
  const articlesArray = Object.values(articles[0]);
  const essentialsList = articlesArray.filter(
    (article) => article.category === "essentials"
  );
  console.log(essentialsList);
  return (
    <>
      <h1>Essentials</h1>
    </>
  );
}
