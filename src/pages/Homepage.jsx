import { Link } from "react-router-dom";

import "../styles/Homepage.css";
import img1 from "../assets/images/homepage/quentinLagache.jpg";
import img2 from "../assets/images/homepage/sheep.jpg";
import img3 from "../assets/images/homepage/sheeps.jpg";
import img4 from "../assets/images/homepage/sheepz.jpg";
import img5 from "../assets/images/homepage/fun.jpg";
import img6 from "../assets/images/homepage/ingoDoerrie.jpg";

export default function HomePage() {
  return (
    <div className="home--container">
      <div className="home--ad-image">
        <div className="home--text-overlay">
          <h2>
            Discover a curated collection of beach-inspired articles that
            capture the essence of coastal living.
          </h2>
          <Link className="home--button" to="/accessories">
            SHOP
          </Link>
        </div>
      </div>
      <div className="home--sheep-container">
        <p className="home--sheep-description">
          Embrace the warmth and comfort of genuine sheep wool articles for an
          authentic beach experience...
        </p>
        <div className="home--sheep-pic-container">
          <img loading="lazy" className="home--image-sheep" src={img3} />
          <img loading="lazy" className="home--image-sheep" src={img2} />
          <img loading="lazy" className="home--image-sheep" src={img4} />
        </div>
      </div>
      <div className="home--van-container">
        <p className="home--van-description">
          ...bringing natural insulation and cozy luxury to your seaside
          adventures.
        </p>
        <img loading="lazy" className="home--van" src={img6} />
      </div>
    </div>
  );
}
