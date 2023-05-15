import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Ratings from "./Rating";
import Categories from "./Categories";
import Range from "./Range";
import { useDispatch } from "react-redux";
import { clearFilters } from "../redux/slice";
import { useTheme } from "@emotion/react";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

const Filters = ({ setDrawerOpen }) => {
  const theme = useTheme();
  const MediumDevicesDown = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const resetFilters = () => {
    dispatch(clearFilters());
    if (MediumDevicesDown) {
      setDrawerOpen(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor:theme.palette.secondary.main,
        [theme.breakpoints.down("md")]: {
          padding: "2rem !important",
        },
      }}
    >
      <Typography
        sx={{
          margin: MediumDevicesDown?"1rem 0rem":"2rem 4rem",
          fontFamily: "Alkatra",      
        }}
        variant="h5"
      >
        Filters
      </Typography>
      <Box>
        <Categories
          categories={categories}
          title="Category"
          setDrawerOpen={setDrawerOpen}
          MediumDevicesDown={MediumDevicesDown}
        />
        <Ratings
          setDrawerOpen={setDrawerOpen}
          MediumDevicesDown={MediumDevicesDown}
        />
        <Range
          setDrawerOpen={setDrawerOpen}
          MediumDevicesDown={MediumDevicesDown}
        />
        <Box paddingLeft={MediumDevicesDown?"1rem 0rem":"4rem"} margin="2rem 0rem">
          <Button variant="contained" onClick={resetFilters} sx={{color:"#fff"}}>
            Clear Filters
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
