const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_MOVIE_FROM_WATCH_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_WATCHED_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_MOVIE_FROM_WATCHED_LIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    case "RETURN_MOVIE_FROM_WATCH_LIST":
      return {
        ...state,
        watched: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};

export default AppReducer;
