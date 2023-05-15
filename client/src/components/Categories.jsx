import {
  Typography,
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
// import React, { useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import { setCategory } from "../redux/slice";

const Categories = ({ categories, title,setDrawerOpen,MediumDevicesDown}) => {
  const category=useSelector(store=>store.state.categoryFilter);
  const dispatch=useDispatch();
  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
    if(MediumDevicesDown){
      setDrawerOpen(false);
    }
  };

  return (
    <Box paddingLeft={MediumDevicesDown?"1rem":"4rem"}>
      <Typography
        sx={{ fontFamily: "Alkatra", fontSize: "16px",marginBottom:"1rem" }}
      >
        {title}
      </Typography>
      <FormControl fullWidth variant="filled" sx={{width:MediumDevicesDown?"80%":"100%"}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {
            categories.map((category,index)=>{
              return(
                <MenuItem value={category} key={index}>{category}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default Categories;
