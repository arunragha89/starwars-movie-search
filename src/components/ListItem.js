import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { chevronRight } from "../constants/svg-constants";

const ListItem = ({ movie: { title, episode_id, director, release_date } }) => {
  const location = useLocation();
  const history = useHistory();

  const classNames =
    location.pathname.indexOf(episode_id) > -1 ? "bg-gray-200" : "";

  const handleClick = (episode_id) => {
    history.push(`/characters/${episode_id}?movie=${title}`);
  };

  return (
    <tr
      className={`${classNames} cursor-pointer hover:bg-gray-100`}
      onClick={() => {
        handleClick(episode_id);
      }}
      data-testid="movie-list-item"
    >
      <td className="py-8 text-center">{title}</td>
      <td className="py-8 text-center">{episode_id}</td>
      <td className="py-8 text-center">{director}</td>
      <td className="py-8 text-center">{release_date}</td>
      <td className="pl-8 py-8 text-center">{chevronRight}</td>
    </tr>
  );
};

export default ListItem;
