// import React from "react";
import { categories } from "../data";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { setCategory } from "../redux/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      margin="4rem 0rem"
      sx={{
        [theme.breakpoints.down("md")]: {
          margin: "2rem 0rem",
        },
        [theme.breakpoints.down("sm")]: {
          margin: "1rem 0rem",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Alkatra",
          textAlign: "center",
          marginBottom: "1rem",
          color: theme.palette.mode === "dark" && "#ffffff",
        }}
      >
        Categories
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(8,1fr)"
        gap="1rem"
        padding="0rem 1rem"
        sx={{
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(5,1fr)",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2,1fr)",
          },
        }}
      >
        {categories.map((category, index) => {
          return (
            <Card
              sx={{
                maxWidth: 200,
                cursor: "pointer",
                "&:hover": { transform: "scale(1.1)" },
                backgroundColor: theme.palette.secondary.main,
                transition: "transform .10s ease-in-out",
              }}
              variant="outlined"
              key={index}
              onClick={() => {
                dispatch(setCategory(category.title.toLowerCase()));
                navigate("/products");
              }}
            >
              <CardMedia
                sx={{ height: 100 }}
                image={category.image}
                component={"img"}
                // data-src={category.image}
                title={category.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "16px", fontFamily: "Alkatra" }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Category;
