import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.Movie);
  console.log(genreList);
  console.log(item);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
          ")",
      }}
    >
      <h1>{item.title}</h1>
      <div>
        {item.genre_ids.map((id) => (
          <Badge className="badge" bg="danger">
            {genreList.find(() => item.id === id).name}
          </Badge>
        ))}
      </div>
      <div>
        <span>{item.vote_average}</span>
        <span>{item.adult ? "청불" : "청소년관람가"}</span>
      </div>
    </div>
  );
};

export default MovieCard;
