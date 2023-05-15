import React from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/slice";
import { useGetProductQuery } from "../redux/service";
import { useDispatch } from "react-redux";

const Container = styled(Paper)`
  display: flex;
  flex-direction: row;
  margin: 5rem 3rem 2rem 3rem;
  padding: 2rem;
`;
const InfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  text-align: left;
  justify-content: center;
`;
const Title = styled(Typography)`
  font-family: Alkatra;
  font-size: 1.5rem;
  font-weight: 200;
`;

const Price = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled(Typography)`
  font-size: 1rem;
  font-weight: 100;
  font-family: Alkatra;
`;

const Rating = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
`;
const CartButton = styled(Button)`
  background-color: orange;
  color: white;
  font-size: 1rem;
`;
const Product = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  const navigate = useNavigate();

  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Container
        sx={{
          backgroundColor: theme.palette.secondary.main,
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: ".5rem",
            margin: "1rem",
          },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={data?.images[0]} style={{ width: "100%" }} alt="product" />
        </Box>

        <InfoContainer
          sx={{
            [theme.breakpoints.down("sm")]: {
              marginLeft: ".8rem",
            },
          }}
        >
          <Title
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
            }}
          >
            {data?.title}
          </Title>

          <Price
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
            }}
          >
            <CurrencyRupeeIcon fontSize="medium" />
            {data?.price}
          </Price>

          <Description>
            {data?.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Molestiae unde consectetur sunt. Eius
            reprehenderit fugit sapiente architecto laudantium recusandae odit
            totam, iste, quasi aut eaque iusto neque sequi. Laborum, asperiores!
          </Description>

          <Rating>
            <IconButton>
              <StarIcon fontSize="small" />
            </IconButton>
            {data?.rating}
          </Rating>

          <Box display={"flex"} flexDirection={"row"}>
            <Typography sx={{ marginTop: "1.5rem",marginRight:".5rem" }}>
              <CartButton
                sx={{ backgroundColor: theme.palette.primary.main }}
                onClick={() =>
                  data ? dispatch(addToCart({ ...data, quantity: 1 })) : null
                }
              >
                <ShoppingCartIcon
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1rem",
                    },
                  }}
                />
                Add To Cart
              </CartButton>
            </Typography>
            <Typography sx={{ marginTop: "1.5rem" }}>
              <CartButton
                sx={{ backgroundColor: theme.palette.primary.main }}
                onClick={() => navigate("/products")}
              >               
                Back To Products
              </CartButton>
            </Typography>
          </Box>
        </InfoContainer>
      </Container>
    </Box>
  );
};

export default Product;
