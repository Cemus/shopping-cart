import { getUrl } from "../utils/getUrlVite.js";

export default function Article({ name, price, description, image }) {
  console.log(getUrl(image, "jpg"));
  return (
    <>
      <img className="article--image" src={getUrl(image, "jpg")} alt={name} />
    </>
  );
}
