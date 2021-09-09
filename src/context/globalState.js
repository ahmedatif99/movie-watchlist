import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

// inital state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// carete context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id });
  };

  const addMovieToWatchedList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie });
  };

  const removeMovieFromWatchedList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED_LIST", payload: id });
  };

  const returnMovieFromWatchList = (movie) => {
    dispatch({ type: "RETURN_MOVIE_FROM_WATCH_LIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatchedList,
        removeMovieFromWatchedList,
        returnMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
