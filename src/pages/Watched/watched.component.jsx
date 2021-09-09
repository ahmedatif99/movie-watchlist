import React, { useContext } from "react";

import { GlobalContext } from "../../context/globalState";

import Cards from "../../components/Cards/cards.component";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My watched movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <Cards key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">There is no movie in your watched list</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;