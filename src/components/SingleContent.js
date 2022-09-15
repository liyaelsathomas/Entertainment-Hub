import { Badge, Box } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { img_300, unavailable } from "../config/config";

const SingleContent = ({ details, mediatype, date, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#282c34",
        borderRadius: "10px",
        padding: "3px",
        margin: "5px 0",
       ' &:hover':{
backgroundColor:'white',
color:'black'
        }
      }}
    >
      <Badge
        badgeContent={details.vote_average}
        color={details.vote_average > 5 ? "primary" : "secondary"}
      />

      <img
        src={
          details.poster_path
            ? `${img_300}/${details.poster_path}`
            : unavailable
        }
        alt={title}
        style={{ borderRadius: "10px",objectFit:'cover' }}
      />
      <b
        className="title"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {title}
      </b>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Montserrat",
          fontWeight: "200",
          paddingBottom: "10px",
        }}
      >
        <span>{mediatype === "TV" ? "TV Series" : "Movie"}</span>
        <span>{date}</span>
      </Box>
    </Box>
  );
};

export default SingleContent;
