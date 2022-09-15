import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../config/config";
import Custompagination from "./Custompagination";
import SingleContent from "./SingleContent";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page,setPage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}&page=${page}`
    );
    setTrending(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
  <>
  <h3 style={{textAlign:'center',fontFamily:'Montserrat',fontWeight:'100',fontSize:'30px'}}>TRENDING TODAY</h3>
      <Grid container spacing={2}>
        {
          trending.map((trend) => (
            <Grid item xs={2} md={4} lg={2.4} key={trend.id}>
            <SingleContent details={trend} mediatype ={trend.media_type} date={trend.release_date || trend.first_air_date} title={trend.name || trend.original_title}/>
          </Grid>
          ))
        }
       
      </Grid>
      <Custompagination setPage={setPage}/>
      </>
  );
};

export default Trending;
