import {
  Box,
  Button,
  createTheme,
  Grid,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { APIKEY } from "../config/config";
import Custompagination from "./Custompagination";
import SingleContent from "./SingleContent";

const SearchPage = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    primary: {
      main: "#fff",
    },
  });

  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);

  const [page, setPage] = useState(1);
  const [numofPages, setNumofPages] = useState();

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const SearchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=${APIKEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumofPages(data.total_pages);
  };

  useEffect(() => {
    SearchData();
  }, [type, page]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          variant="standard"
          label="Search"
          sx={{ flex: 1 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" style={{ marginLeft: 10 }}>
          <SearchIcon fontSize="large" onClick={SearchData} />
        </Button>
      </Box>
      <Box sx={{ width: "100%", paddingTop: "10px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={type}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Search Movies" />
            <Tab label="Search Series" />
          </Tabs>
        </Box>
      </Box>
      {content && (
        <>
          <Grid container spacing={2} marginTop={1}>
            {content.map((trend) => (
              <Grid item xs={2} md={4} lg={2.4} key={trend.id}>
                <SingleContent
                  details={trend}
                  mediatype={trend.media_type}
                  date={trend.release_date || trend.first_air_date}
                  title={trend.name || trend.original_title}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {searchText &&
        !content &&
        (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}

      {numofPages > 1 && (
        <Custompagination
          total_pages={numofPages}
          style={{ marginBottom: "20px" }}
          setPage={setPage}
          page={page}
        />
      )}
    </ThemeProvider>
  );
};

export default SearchPage;
