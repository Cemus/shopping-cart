import { Link } from "react-router-dom";
import articles from "../data/articles.json";
export default function Jewelry() {
  const articlesArray = Object.values(articles[0]);
  const jewelryList = articlesArray.filter(
    (article) => article.category === "jewelry"
  );
  console.log(jewelryList);
  return (
    <>
      <h1>Jewelry</h1>
    </>
  );
}
