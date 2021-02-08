import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Context as MovieContext } from "../context/MovieContext";
import { Context as SearchContext } from "../context/SearchContext";

import ListItem from "./ListItem";

const List = () => {
  const { state, fetchMovies } = useContext(MovieContext);
  const { state: searchState } = useContext(SearchContext);
  const [movieListTobeShown, setMovieListTobeShown] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchMovies().catch(function (err) {
      console.log(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredList = state.filter((movie) => {
      return movie.title.indexOf(searchState) > -1;
    });

    if (searchState) {
      history.push(
        `/characters/${filteredList[0].episode_id}?movie=${filteredList[0].title}`
      );
    }

    setMovieListTobeShown(filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, searchState]);

  return (
    <table className="table-auto flex-grow-0 flex-shrink-0 w-3/6">
      <thead>
        <tr>
          <th className="p-4">Title</th>
          <th className="p-4">Episode_Id</th>
          <th className="p-4"> Director</th>
          <th className="p-4">Release Date</th>
        </tr>
      </thead>
      <tbody>
        {movieListTobeShown.length > 0 &&
          movieListTobeShown.map((movie) => {
            return <ListItem key={movie.episode_id} movie={movie} />;
          })}
      </tbody>
    </table>
  );
};

export default List;
