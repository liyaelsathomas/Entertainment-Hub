import { Box } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../config/config";

const SingleContent = ({ details, mediatype, date, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#282c34",
        borderRadius: "10px",
        padding: "5px",
        margin: "5px 0",
      }}
    >
      <img
        src={
          details.poster_path
            ? `${img_300}/${details.poster_path}`
            : unavailable
        }
        alt={title}
      />
      <b className="title" style={{fontFamily:'Montserrat',fontWeight:'500',textAlign:'center'}}>{title}</b>
      <Box sx={{display:'flex',justifyContent:'space-between',fontFamily:'Montserrat',fontWeight:'200',padding:'10px'}}>
        <span>{mediatype === "TV" ? "TV Series" : "Movie"}</span>
        <span>{date}</span>
      </Box>
    </div>
  );
};

export default SingleContent;
