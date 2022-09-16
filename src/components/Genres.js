import { Box, Chip, Stack } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { APIKEY } from "../config/config";
const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  type,
  setPage
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${APIKEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
        // eslint-disable-next-line

  }, []);

  const handleClick = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);

    setGenres(genres.filter((g) => g.id != genre.id));
    setPage(1)
  };

  const handleDelete = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(selectedGenres.filter((g) => g.id != genre.id));
    setPage(1)
  };


  return (
    <Box>
      {selectedGenres?.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          clickable
          size="small"
          color="primary"
          onDelete={() => handleDelete(genre)}
        />
      ))}
      {genres?.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          clickable
          size="small"
          color="secondary"
          sx={{margin:'1px'}}
          onClick={() => handleClick(genre)}
        />
      ))}
    </Box>
  );
};

export default Genres;
