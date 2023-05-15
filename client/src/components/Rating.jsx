import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../redux/slice";

const Ratings = ({setDrawerOpen,MediumDevicesDown}) => {
  const rating = useSelector((store) => store.state.ratingFilter);
  const dispatch = useDispatch();

  return (
    <Box marginTop="1rem">
      <Typography
        sx={{ fontFamily: "Alkatra", fontSize: "16px", paddingLeft:MediumDevicesDown?"1rem":"4rem" }}
      >
        Rating
      </Typography>
      <Rating
        value={rating}
        sx={{ marginLeft:MediumDevicesDown?"1rem":"4rem", paddingTop: ".5rem" }}
        name="simple-controlled"
        precision={0.1}
        onChange={(event, newValue) => {
          dispatch(setRating(newValue));
          if(MediumDevicesDown){
            setDrawerOpen(false);
          }
        }}
      />
    </Box>
  );
};

export default Ratings;
