import React, { useCallback} from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import ShoppingCartIcon from "../assets/ShoppingCartIconGif.gif";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import CartItem from "./CartItem";
const CartBar = ({
  isCartBarOpen,
  setIsCartBarOpen,
  isNonMobile,
  drawerWidth,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const cartProducts = useSelector((store) => store.state.cart);
  const handleChange=useCallback(()=>{

  },[])
  
  const totalPrice=cartProducts.reduce((total, product) => {
      return total + parseInt(product.price) * parseInt(product.quantity);
    }, 0);

  return (
    <Drawer
      open={isCartBarOpen}
      onClose={() => setIsCartBarOpen(false)}
      anchor="right"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: theme.palette.secondary.main,
        },
      }}
    >
      {cartProducts.length > 0 ? (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="0.5rem"
            marginTop="2rem"
            marginBottom="2rem"
            padding="1rem"
          >
            {!isNonMobile && (
              <IconButton
                sx={{ color: theme.palette.primary.main }}
                onClick={() => setIsCartBarOpen(false)}
              >
                <ChevronRight />
              </IconButton>
            )}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontSize: "20px", fontFamily: "Roboto" }}
            >
              My Cart
            </Typography>
          </Box>
          {cartProducts.map((product, index) => {
            return (
              <CartItem  product={product} key={index} handleChange={handleChange}/>
            );
          })}

          <Divider sx={{ margin: ".3rem" }} />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="0 1rem"
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                paddingTop: "8px",
              }}
            >
              TOTAL
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                paddingTop: "8px",
              }}
            >
              ₹ {totalPrice}
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button
              sx={{ margin: "1rem", color: "#fff" }}
              variant="contained"
              onClick={() =>cartProducts.length<=0?null: navigate("/checkout")}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="0.5rem"
            marginTop="2rem"
            marginBottom="2rem"
            padding="1rem"
          >
            {!isNonMobile && (
              <IconButton onClick={() => setIsCartBarOpen(false)}>
                <ChevronRight />
              </IconButton>
            )}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontSize: "20px", fontFamily: "Roboto" }}
            >
              My Cart
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <img src={ShoppingCartIcon} alt="cartt" />
            <Typography sx={{ fontFamily: "Alkatra", fontSize: "1rem" }}>
              Your cart is empty
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "#fff" }}
              onClick={() => {
                setIsCartBarOpen(false);
                navigate("/products");
              }}
            >
              Add Products
            </Button>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

export default CartBar;
