import React, { useCallback, useEffect, useState } from "react";
import "./movie.css";
import ProfileImg from "../../assests/profileimage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [genreList, setGenreList] = useState({});
  const categoryData = JSON.parse(localStorage.getItem("categoryData")) || [];
  const navigate = useNavigate();
  const moviesData = {};

  const fetchGenresData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            language: "en-US",
            api_key: "2f1d522f9a87d7458baceea9a5184900",
          },
        }
      );

      // setGenreList(response.data.genres);
      localStorage.setItem("genres", JSON.stringify(response.data.genres));
    } catch (error) {
      console.error("Error fetching genre data:", error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    let genresId = JSON.parse(localStorage.getItem("genres"));
    for (let category of categoryData) {
      let categoryId = genresId.find((genre) => genre.name === category);
      categoryId = categoryId ? categoryId.id : null;
      if (categoryId != null) {
        const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&language=en-US&year=2023&api_key=2f1d522f9a87d7458baceea9a5184900`;
        try {
          const response = await axios.get(url);
          if (response.status == 200) {
            const data = response.data;
            // console.log(data);
            moviesData[category] = data.results.slice(0, 4);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
    setMoviesByCategory(moviesData);
  }, []);

  useEffect(() => {
    fetchGenresData();
    fetchData();
  }, [fetchGenresData, fetchData]);

  // useEffect(() => {
  //   // console.log(genreList);
  //   fetchData();
  // }, [fetchData, genreList]);

  const handleClick = () => {
    navigate("/category");
  };

  return (
    <div className="movie__home">
      <section className="movie__header">
        <h1 className="movie__logo">Super App</h1>
        <img className="profile__image" src={ProfileImg} alt="profile" />
      </section>
      <h2 className="movie__desc">Entertainment according to your choice</h2>
      {Object.keys(moviesByCategory).map((genre) => (
        <div key={genre} className="movie__category">
          <h3 className="movie__Title">{genre}</h3>
          <div className="movie__posters">
            {moviesByCategory[genre].map((movie) => (
              <img
                className="movie__img"
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </div>
        </div>
      ))}
      <button className="movie__button" onClick={handleClick}>
        Go To Home Page
      </button>
    </div>
  );
}

export default Movies;
