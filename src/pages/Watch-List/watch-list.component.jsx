import React, { useContext } from "react";

import { GlobalContext } from "../../context/globalState";

import Cards from "../../components/Cards/cards.component";

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My watch List</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <Cards key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            There is no movie in your Watchlist, add some
          </h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
