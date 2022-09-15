import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        sx={{ backgroundColor: "#2d313a" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Trending"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Movies"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Series"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Search"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
