// React icons
import { MdPlayCircle, MdKeyboardArrowUp } from "react-icons/md";

import "./Item.scss";
const Item = ({ movie, showMovieDetail }) => {
  return (
    <div className="item">
      <div
        className="mobile-click"
        onClick={() => showMovieDetail(movie.src)}
      ></div>
      <img src={movie.src} alt="" />
      <div className="item-detail show">
        <div className="left">
          <MdPlayCircle className="item-icon play" />
          <span>Play</span>
        </div>
        <div className="right" onClick={() => showMovieDetail(movie.src)}>
          <MdKeyboardArrowUp className="item-icon" />
          <span>Detail</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
