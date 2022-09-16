import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { APIKEY } from "../config/config";
import Custompagination from './Custompagination';
import SingleContent from './SingleContent';


const Series = () => {
  const [series,setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numofPages, setNumofPages] = useState();


  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

    );
    setSeries(data.results);
    setNumofPages(data.total_pages)
  };
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);
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
      DISCOVER SERIES
    </h3>
  
    <Grid container spacing={2}>
      {series.map((trend) => (
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
    <Custompagination total_pages={numofPages} setPage={setPage} page={page}/>
  </>
  )
}

export default Series