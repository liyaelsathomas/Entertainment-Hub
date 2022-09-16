import { Badge, Box } from "@mui/material";
import { img_300, unavailable } from "../config/config";
import BasicModal from './Contentmodal/ContentModal'

const SingleContent = ({ details, mediatype, date, title }) => {
  return (
  
      <BasicModal type={mediatype} id={details.id}>
      <Badge
        badgeContent={details.vote_average}
        color={details.vote_average > 5 ? "primary" : "warning"}
      />

      <img
        src={
          details.poster_path
            ? `${img_300}/${details.poster_path}`
            : unavailable
        }
        alt={title}
        style={{ borderRadius: "10px", objectFit: "cover" }}
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
      </BasicModal>
   
  );
};

export default SingleContent;
