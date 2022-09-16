import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../config/config";
import Custompagination from "./Custompagination";
import Genres from "./Genres";
import SingleContent from "./SingleContent";
import { useGenre } from "../hooks/useGenre";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const [numofPages, setNumofPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setMovies(data.results);
    setNumofPages(data.total_pages)

  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page,genreforURL]);

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Montserrat",
          fontWeight: "100",
          fontSize: "30px",
        }}
      >
        DISCOVER MOVIES
      </h3>
      <Genres
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        type={"movie"}
        setPage={setPage}
        
      />
      <Grid container spacing={2}>
        {movies.map((trend) => (
          <Grid item xs={4} md={4} lg={2.4} key={trend.id}>
            <SingleContent
              details={trend}
              mediatype={trend.media_type}
              date={trend.release_date || trend.first_air_date}
              title={trend.name || trend.original_title}
            />
          </Grid>
        ))}
      </Grid>
      <Custompagination setPage={setPage} page={page} total_pages={numofPages}/>
    </>
  );
};

export default Movies;
