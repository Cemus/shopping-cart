import { Link } from "react-router-dom";
import articles from "../data/articles.json";

export default function Beachwear() {
  const articlesArray = Object.values(articles[0]);
  const beachwearList = articlesArray.filter(
    (article) => article.category === "clothes"
  );
  console.log(beachwearList);
  return (
    <>
      <h1>Beachwear</h1>
    </>
  );
}
