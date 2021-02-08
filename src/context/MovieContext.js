import createDataContext from "./createDataContext";
import apiHelper from "../api/api-helper";
import { MOVIE_SEARCH_URL } from "../constants/service-constants";

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "fetch_movies":
      return [...action.payload];
    default:
      return state;
  }
};

const fetchMovies = (dispatch) => async () => {
  const response = await apiHelper(MOVIE_SEARCH_URL);
  dispatch({ type: "fetch_movies", payload: response.results });
};

export const { Provider, Context } = createDataContext(
  moviesReducer,
  { fetchMovies },
  []
);
