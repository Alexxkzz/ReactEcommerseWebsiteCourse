import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { memo } from "react";
import { decreaseProductQunatity, deleteProductFromCArt, increaseProductQunatity } from "../redux/slice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";


const CartItem = ({ product }) => {
  console.log("hello")
    const theme=useTheme();
    const dispatch=useDispatch();
    const incresProduct=()=>{
       dispatch(decreaseProductQunatity(product));
    }
  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="0 1rem"
      margin=".5rem 0"
      sx={{ cursor: "pointer" }}
    >
      <Box width="40%" padding=".5rem" display="flex" alignItems="center">
        <img src={product?.thumbnail} alt="img" width="80%" />
      </Box>
      <Box width="60%">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              paddingTop: "4px",
            }}
          >
            {product?.title?.substring(0, 15)}
          </Typography>
          <IconButton
            size="small"
            onClick={() => dispatch(deleteProductFromCArt(product))}
            sx={{ color: theme.palette.primary.main }}
          >
            <DeleteIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "light",
            fontFamily: "Roboto",
          }}
        >
          {product?.description?.substring(0, 20)}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="1rem"
        >
          <Box display="flex" flexDirection="row" border="1px solid grey">
            <Button
              variant="text"
              sx={{
                padding: "none !important",
                minWidth: "20px",
                width: "30px",
              }}
              onClick={()=>incresProduct()}
            >
              -
            </Button>
            <span style={{ paddingTop: "6px" }}>{product.quantity}</span>
            <Button
              variant="text"
              sx={{
                padding: "none !important",
                minWidth: "20px",
                width: "30px",
              }}
              onClick={() => dispatch(increaseProductQunatity(product))}
            >
              +
            </Button>
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Roboto",
              paddingTop: "8px",
            }}
          >
            ₹ {product.price * product.quantity}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(CartItem);
