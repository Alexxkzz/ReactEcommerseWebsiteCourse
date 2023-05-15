import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Pagination,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, {useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearFilters, setFilterProducts } from "../redux/slice";
import TuneIcon from "@mui/icons-material/Tune";

const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-y: scroll;
  max-height: 500px;
  padding: 1rem;
`;

const DisplayProducts = ({ setDrawerOpen, setProductsSnackbar }) => {
  console.log("DisplayProducts is called");
  const dispatch = useDispatch();
  const products = useSelector((store) => store.state.fetchedProducts);
  const [paginationIndex, setPaginationIndex] = useState({
    minIndex: 0,
    maxIndex: 10,
  });
  const theme = useTheme();
  const MediumDevicesDown = useMediaQuery(theme.breakpoints.down("md"));
  const category = useSelector((store) => store.state.categoryFilter);
  const price = useSelector((store) => store.state.priceFilter);
  const ratingfilter = useSelector((store) => store.state.ratingFilter);
  const searchInput = useSelector((store) => store.state.searchInput);
  const navigate = useNavigate();
  const filterProducts = useSelector((store) => store.state.filterProducts);
  // console.log(filterProducts);

  const handlePagination = (event, value) => {
    setPaginationIndex({
      minIndex: value + "" + 0 - 10,
      maxIndex: parseInt(value + "" + 0),
    });
  };

  useEffect(() => {
    console.log("Hello");
    const applyFilters = () => {
      let productList = products;
      if (searchInput !== null) {
        productList = productList.filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) === true
        );

        dispatch(setFilterProducts(productList));
      }
      if (category !== "") {
        productList = productList.filter(
          (product) => product.category === category
        );
        dispatch(setFilterProducts(productList));
      }
      if (ratingfilter !== null) {
        productList = productList.filter((item) => item.rating >= ratingfilter);
        dispatch(setFilterProducts(productList));
      }
      if (price[0] > 0 || price[1] < 2000) {
        productList = productList.filter(
          (product) => product.price >= price[0] && product.price <= price[1]
        );
        dispatch(setFilterProducts(productList));
      }

      if (productList.length <= 0) {
        // if(searchInput,category,price[0],price[1],ratingfilter === null){
        //   return null;
        // }
        setProductsSnackbar(true);
        dispatch(clearFilters())
      }
    };
    applyFilters();
  }, [category, price, ratingfilter, searchInput, setProductsSnackbar,dispatch,products]);

  if (filterProducts.length > 0) {
    const hello = document.querySelectorAll(".NameTitle");
    // console.log(hello)
    hello.forEach((div) => {
      // console.log(div.innerHTML);
      let regExp = new RegExp(searchInput, "gi");
      div.innerHTML = div.textContent.replace(regExp, `<mark>$&</mark>`);
    });
  }

  return (
    <Box
      flexGrow="1"
      padding="1rem"
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Box display="flex" flexDirection="row">
        {MediumDevicesDown && (
          <IconButton
            color="primary"
            onClick={() => setDrawerOpen(true)}
            sx={{
              borderRadius: "0% !important",
            }}
          >
            <TuneIcon />
          </IconButton>
        )}

        <Typography
          sx={{
            margin: "2rem 4rem",
            fontFamily: "Alkatra",
            textAlign: "center",
            flexGrow: 1,
          }}
          variant="h5"
        >
          Products
        </Typography>
      </Box>

      <Container
        sx={{
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        }}
      >
        {filterProducts.length <= 0
          ? products
              .filter(
                (product, index) =>
                  index >= paginationIndex.minIndex &&
                  index < paginationIndex.maxIndex
              )
              .map((product, index) => {
                return (
                  <Card
                    sx={{ maxWidth: 200 }}
                    key={index}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <CardMedia
                      variant="outlined"
                      sx={{ height: 150 }}
                      image={product.thumbnail}
                      component={"img"}
                  
                    />
                    <CardContent sx={{ padding: "10px !important" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "14px", paddingLeft: "3px" }}
                      >
                        {product.title}
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
                            {product.price}
                          </IconButton>
                        </Typography>
                        <Typography>
                          <IconButton
                            sx={{ fontSize: "13px", padding: "0px !important" }}
                          >
                            <StarIcon fontSize="small" />
                            {product.rating}
                          </IconButton>
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })
          : filterProducts.map((product, index) => {
              return (
                <Card
                  sx={{ maxWidth: 200 }}
                  key={index}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardMedia
                    variant="outlined"
                    sx={{ height: 150 }}                  
                    image={product.thumbnail}
                    component={"img"}
                  />
                  <CardContent sx={{ padding: "10px !important" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "14px", paddingLeft: "3px" }}
                      className="NameTitle"
                    >
                      {product.title}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>
                        <IconButton
                          sx={{ fontSize: "13px", padding: "0px!important" }}
                        >
                          <CurrencyRupeeIcon fontSize="small" />
                          {product.price}
                        </IconButton>
                      </Typography>
                      <Typography>
                        <IconButton
                          sx={{ fontSize: "13px", padding: "0px !important" }}
                        >
                          <StarIcon fontSize="small" />
                          {product.rating}
                        </IconButton>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
      </Container>

      {filterProducts.length > 0 ? null : (
        <Box
          sx={{
            padding: "2rem 0rem",
            textAlign: "center",
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Pagination
            count={10}
            color="primary"
            onChange={handlePagination}
            sx={{
              "&>ul>li>button.css-1p5ax8m-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
                {
                  color: "#fff",
                },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DisplayProducts;
