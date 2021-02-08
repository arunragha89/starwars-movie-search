import React, { useContext, useEffect, useState } from "react";

import apiHelper from "../api/api-helper";
import { Context as MovieContext } from "../context/MovieContext";
import useQuery from "../hooks/useQuery";
import Loader from "./Loader";
import Error from "./Error";

const Characters = (props) => {
  const { state, fetchMovies } = useContext(MovieContext);
  const query = useQuery();

  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMovies().catch(function (err) {
      console.log(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function showCharacters() {
      setCharacters([]);
      const movieId = props.match.params.id;

      const movie = state.find((movie) => {
        return movie.episode_id.toString() === movieId;
      });

      const characters = movie?.characters;
      let characterDetails;

      if (characters) {
        try {
          characterDetails = await Promise.all(
            characters.map(async (character) => {
              const response = await apiHelper(
                character.split("http://swapi.dev/")[1]
              );
              return response;
            })
          );
        } catch (err) {
          setError(true);
        }
      }

      setError(false);
      setCharacters(characterDetails);
    }

    showCharacters();
  }, [state, props.match.params.id]);

  const renderLoaderOrError = () => {
    return error ? <Error /> : <Loader />;
  };

  const renderCharacters = () => {
    return (
      <div>
        <div className="font-bold underline text-lg m-6">
          {" "}
          <div className="text-2xl p-4">Movie: {query.get("movie")} </div>
          <div>Characters ({characters.length})</div>
        </div>
        {characters.map((character, index, characters) => {
          return (
            <span key={character.name} className="p-1">
              {character.name}
              {characters.length - 1 === index ? "" : ","}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="m-6 flex flex-col text-center flex-auto">
      {characters && characters.length > 0
        ? renderCharacters()
        : renderLoaderOrError()}
    </div>
  );
};

export default Characters;
