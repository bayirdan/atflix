import "./Body.scss";
import { useState } from "react";

// Movies Data
import { moviesData } from "../../db";

// Components
import List from "../List/List";
import Detail from "./Detail";

const Body = () => {
  const [movieDetail, setMovieDetail] = useState(false);
  const [movieSrc, setMovieSrc] = useState("");

  // Show movie detail control
  const showMovieDetail = (movieSrc) => {
    setMovieSrc(movieSrc);
    setMovieDetail(true);
    document.body.classList.add("close-overflow");
    return;
  };

  // Hide movie detail
  const hideMovieDetail = () => {
    document.body.classList.remove("close-overflow");
    return setMovieDetail(false);
  };

  return (
    <div className="body">
      <List movieData={moviesData.myList} showMovieDetail={showMovieDetail} />
      <List
        movieData={moviesData.trendingList}
        showMovieDetail={showMovieDetail}
      />
      <List
        movieData={moviesData.popularList}
        showMovieDetail={showMovieDetail}
      />
      <List movieData={moviesData.newList} showMovieDetail={showMovieDetail} />
      <List
        movieData={moviesData.comedieList}
        showMovieDetail={showMovieDetail}
      />
      <List movieData={moviesData.tvList} showMovieDetail={showMovieDetail} />
      {movieDetail && (
        <Detail movieSrc={movieSrc} hideMovieDetail={hideMovieDetail} />
      )}
    </div>
  );
};

export default Body;
