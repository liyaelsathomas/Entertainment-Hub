import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { APIKEY } from "../../config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

export default function BasicModal({ children, type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${APIKEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${APIKEY}&language=en-US`
    );
    // console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [type]);
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: "200px",
          backgroundColor: "#282c34",
          borderRadius: "10px",
          padding: "3px",
          " &:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
        onClick={handleOpen}
      >
        {children}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <>
          {content && (
            <div
              style={{
                width: "90%",
                height: "80%",
                backgroundColor: "#39445a",
                border: "1px solid #282c34",
                borderRadius: 10,
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  height: "100%",
                  width: "100%",
                  overflowY: "scroll",
                  padding: "10px 0",
                }}
              >
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.title}
                  style={{ width: "30%" }}
                />
                <Box
                  className="contentModal__about"
                  sx={{
                    width: "59%",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <span style={{ fontSize: "49px", textAlign: "center" }}>
                    {content.name || content.title} (
                    {(content.first_air_date || content.release_date).substring(
                      0,
                      4
                    )}
                    )
                  </span>
                  <span style={{ textAlign: "center", fontStyle: "italic" }}>
                    {content.tagline}
                  </span>
                  <span
                    style={{
                      marginTop: "10px",
                      boxShadow: "inset 0 0 5px #000000",
                      overflowY: "scroll",
                      scrollbarWidth: "thin",
                      padding: "10px",
                      height: "40%",
                      borderRadius: "10px",
                      textAlign: "justify",
                      fontSize: "20px",
                    }}
                  >
                    {content.overview}
                  </span>

                  <Carousel media_type={type} id={id} />
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </Box>
              </div>
            </div>
          )}
        </>
      </Modal>
    </>
  );
}
