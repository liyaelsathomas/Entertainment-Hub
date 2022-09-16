import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY, img_300, noPicture } from "../../config/config";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${APIKEY}&language=en-US`
    );
    // console.log(data.cast);
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);
  
  const items = credits.map((credit) => (
    <div className="carouselItem" style={{display:'flex',flexDirection:'column',padding:'10px'}}>
      <img
        src={
          credit.profile_path ? `${img_300}/${credit.profile_path}` : noPicture
        } alt={credit?.name} style={{borderRadius:'10px'}}
      />
      <b className="carouselItem__txt">{credit?.name}</b>
    </div>
  ));


  return (
    <AliceCarousel
    autoPlay
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
    />
  );
};

export default Carousel;
