import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../config/config";
import SingleContent from "./SingleContent";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`
    );
    console.log(data);
    setTrending(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

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
      </>
  );
};

export default Trending;
