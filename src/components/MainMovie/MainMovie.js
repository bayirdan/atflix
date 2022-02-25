import "./MainMovie.scss";

// React icons
import { FaPlay, FaExclamationCircle } from "react-icons/fa";

const MainMovie = () => {
  return (
    <div className="main-movie">
      <div className="section">
        <div className="info">
          <h1>
            <span>G</span>ame <span className="of">Of</span> <span>T</span>
            hrones
          </h1>
          <p>
            The last descendant of the realm's deposed ruling dynasty, who has
            been exiled to Essos and is plotting to return and reclaim the
            throne.
          </p>
        </div>
        <div className="buttons">
          <button className="btn-play">
            <FaPlay className="icon" />
            Play
          </button>
          <button className="btn-info">
            <FaExclamationCircle className="icon" />
            More Info
          </button>
        </div>
      </div>
      <div className="age-limit">18+</div>
    </div>
  );
};

export default MainMovie;
