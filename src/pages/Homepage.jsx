import { Link } from "react-router-dom";

import "../styles/Homepage.css";
import img1 from "../assets/images/homepage/quentinLagache.jpg";
import img2 from "../assets/images/homepage/sheep.jpg";
import img3 from "../assets/images/homepage/sheeps.jpg";
import img4 from "../assets/images/homepage/sheepz.jpg";
import img5 from "../assets/images/homepage/fun.jpg";

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
        <div className="home--sheep-pic-container">
          <img className="home--image-sheep" src={img3} />
          <img className="home--image-sheep" src={img2} />
          <img className="home--image-sheep" src={img4} />
        </div>
        <p className="home--sheep-description">De la maroquinerie classe</p>
      </div>
    </div>
  );
}
