import React, { useContext, useEffect, useState } from "react";

import { Context as MovieContext } from "../context/MovieContext";
import useAutoComplete from "../hooks/useAutoComplete";
import { searchIcon } from "../constants/svg-constants";

const SearchBar = () => {
  const { state: movies } = useContext(MovieContext);

  const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState([]);

  const {
    autoCompleteState,
    onKeyDown,
    handleOnChange,
    renderSuggestions,
  } = useAutoComplete(autoCompleteSuggestions);

  useEffect(() => {
    const movieTitles = movies.map((movie) => {
      return movie.title;
    });
    setAutoCompleteSuggestions(movieTitles);
  }, [movies]);

  return (
    <form action="" role="search" className="flex flex-auto">
      <label htmlFor="site-search" className="m-4">
        Search Movie:
      </label>
      <div
        className={`flex flex-auto relative border border-transparent border-black rounded-3xl p-3 shadow-md ${
          autoCompleteState.showOptions ? "rounded-b-none border-b-0" : ""
        }`}
      >
        {searchIcon}
        <input
          type="text"
          id="site-search"
          autoComplete="off"
          className="bg-gray-50 focus:border-transparent flex-auto outline-none pl-4"
          onKeyDown={onKeyDown}
          onChange={handleOnChange}
        />
        {autoCompleteState.showOptions && renderSuggestions()}
      </div>
    </form>
  );
};

export default SearchBar;
