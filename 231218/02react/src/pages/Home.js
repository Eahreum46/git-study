import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovie());
  }, []);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#f00",
  };
  if (loading) {
  }
  return (
    <div className="slide">
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading-spinner"
        data-testid="loading"
      />
      {popularMovies.results && <Banner movie={popularMovies.result[3]} />}
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>TopRated Movies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>UpComing Movies</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;
