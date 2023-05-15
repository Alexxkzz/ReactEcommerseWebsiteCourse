import React from "react";
import Carousel from "react-multi-carousel";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  useTheme,
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  const topRatedProducts = useSelector((store) => store.state.topRatedProducts);
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: "3rem",
        [theme.breakpoints.down("md")]: {
          marginTop: "1rem",
        },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontFamily: "Alkatra !important",
          color: theme.palette.mode === "dark" && "#ffffff",
        }}
      >
        Our Top Rated Products
      </Typography>
      <Box>
        <Carousel
          arrows={false}
          swipeable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {topRatedProducts.map((item, index) => {
            return (
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={index}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {item ? (
                  <Card sx={{ maxWidth: 300, width: "100%" }}>
                    <CardMedia
                      variant="outlined"
                      sx={{ height: 270 }}
                      image={item.thumbnail}             
                      component={"img"}
                    />
                    <CardContent
                      sx={{
                        padding: "10px !important",
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.primary.main,
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "14px", paddingLeft: "3px" }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>
                          <IconButton
                            sx={{ fontSize: "13px", padding: "0px!important" }}
                          >
                            <CurrencyRupeeIcon fontSize="small" />
                            {item.price}
                          </IconButton>
                        </Typography>
                        <Typography>
                          <IconButton
                            sx={{ fontSize: "13px", padding: "0px !important" }}
                          >
                            <StarIcon fontSize="small" />
                            {item.rating}
                          </IconButton>
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ) : (
                  <Skeleton variant="rectangukar" width={200} height={250} />
                )}
              </div>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Slider;
