import "./Detail.scss";

// React icons
import {
  GoPlus,
  GoThumbsup,
  GoThumbsdown,
  GoTriangleDown,
} from "react-icons/go";

const Detail = ({ movieSrc, hideMovieDetail }) => {
  // for click the div except card
  const handleDivClick = (e) => {
    e.stopPropagation();
    hideMovieDetail();
    return;
  };

  return (
    <div className="detail" onClick={handleDivClick}>
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <GoTriangleDown className="icon" onClick={() => hideMovieDetail()} />
        </div>
        <img src={movieSrc} alt="" />
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          architecto enim omnis aut possimus recusandae nulla modi itaque iste
          est.
        </p>
        <button>Play</button>
        <div className="card-icons">
          <div className="add-list">
            <GoPlus className="plus" /> Add List
          </div>
          <div className="likes">
            <GoThumbsup />
            <GoThumbsdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
