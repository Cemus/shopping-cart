import { getUrl } from "../utils/getUrlVite.js";
import "../styles/Article.css";

export default function Article({ name, price, description, image }) {
  console.log(getUrl(image, "jpg"));
  return (
    <div className="article--container">
      <img className="article--image" src={getUrl(image, "jpg")} alt={name} />
      <div className="article--informations">
        <h3 className="article--name">{name}</h3>
        <p className="article--description">{description}</p>
        <h4 className="article--price">{`${price} $`}</h4>
        <button className="article--buy" type="button">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
