import { Slider, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector,useDispatch} from "react-redux";
import { setPrice } from "../redux/slice";

const Range = ({setDrawerOpen,MediumDevicesDown}) => {
const price=useSelector(store=>store.state.priceFilter)
const dispatch=useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(setPrice(newValue))
    if(MediumDevicesDown){
      setDrawerOpen(false);
    }
  };

  return (
    <Box sx={{ paddingLeft:MediumDevicesDown?"1rem":"4rem",margin:"1rem 0rem"}}>
      <Typography
        sx={{ fontFamily: "Alkatra", fontSize: "16px" }}
      >
        Price
      </Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={2000}
        sx={{width:MediumDevicesDown?"80%":"100%"}}
      />
    </Box>
  );
};

export default Range;
