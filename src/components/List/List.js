import "./List.scss";
import { useState } from "react";

//Components
import Item from "./Item";

//React icons
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const List = ({ movieData, showMovieDetail }) => {
  const [winSize, setWinSize] = useState(window.innerWidth);

  // Slide buttons control.
  const handleRight = () => {
    document.querySelector(`#js-movies${movieData.id}`).scrollLeft += winSize;
  };
  const handleLeft = () => {
    document.querySelector(`#js-movies${movieData.id}`).scrollLeft -= winSize;
  };

  // Default slide scrollLeft value when resize the window
  window.addEventListener("resize", () => {
    setWinSize(window.innerWidth);
    document.querySelectorAll(".movies").forEach((i) => {
      i.scrollLeft = 0;
    });
  });

  return (
    <div className="list">
      <h1>{movieData.title}</h1>
      <div className="movies-box">
        <div className="buttons">
          <MdOutlineArrowBackIosNew
            className="btn btn-left"
            onClick={handleLeft}
          />
          <MdOutlineArrowForwardIos
            className="btn btn-right"
            onClick={handleRight}
          />
        </div>
        <div className="movies" id={`js-movies${movieData.id}`}>
          {movieData.movies.map((movie, index) => {
            return (
              <Item
                key={index}
                movie={movie}
                showMovieDetail={showMovieDetail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
