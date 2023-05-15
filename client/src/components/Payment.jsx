import React, { useEffect, useMemo, useState } from "react";
import { usePostOrderMutation } from "../redux/service";
import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import Payout from "../assets/PayoutImage.gif";
import PayoutSuccess from "../assets/PaymentSuccesful.gif";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/slice";
import { useDispatch,useSelector } from "react-redux";

const Payment = ({setCompleted,completed,MediumDevicesDown}) => {
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.state.user[0])
  const address=useSelector(store=>store.state.address[0])
  console.log(user,address);
  const [succesPayment, setSuccesPayment] = useState(false);
  const cartProducts = useSelector((store) => store.state.cart);
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + parseInt(product.price) * parseInt(product.quantity);
  }, 0);
  let receiptInfo = cartProducts.reduce((total, product) => {
    return total.concat(product.title.substr(0, 3));
  }, "receipt");
  console.log(receiptInfo);

  const orderData = useMemo(() => {
    return {
      amount: totalPrice,
      currency: "INR",
      receipt: receiptInfo,
    };
  }, [totalPrice, receiptInfo]);

  const [postOrder, res] = usePostOrderMutation();

  console.log(res);
  const imageUrl="https://yt3.googleusercontent.com/Byof2QfpElZHM6_8qr2Cpd9FOJSxE2e_xoaXJw1vy9ZldaLSXOz8cyVbJU9WPXNqflpre0wvDno=s176-c-k-c0x00ffffff-no-rj"

  const payment = () => {
    var options = {
      key: `${res.data.key}`, // Enter the Key ID generated from the Dashboard
      amount: `${res.data.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Deepali Store", //your business name
      description: "Ecommerse Store",
      image: {imageUrl},
      order_id: `${res.data.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setCompleted((prev) => ({ ...prev, stepThree: true }));
        setSuccesPayment(true);
        dispatch(emptyCart())
      },
      prefill: {
        name: [user.name], //your customer's name
        email: [user.email],
        contact: [user.contact],
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  };
  const backToHome=()=>{
    Navigate("/home")
  }
  const theme=useTheme();

  useEffect(() => {
    if (completed.stepOne && completed.stepTwo&&orderData.amount>0) {
      postOrder(orderData);
    }
  }, [completed.stepOne, completed.stepTwo, postOrder, orderData]);
  
  return (
    <Paper
      sx={{
        width:MediumDevicesDown?"90%":"50%",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor:theme.palette.secondary.main
      }}
    >
      {succesPayment === true ? (
        <Box padding={MediumDevicesDown?"1rem":"2rem"}>
          <img src={PayoutSuccess} alt="" width={MediumDevicesDown?"100%":400} />
          <Typography sx={{fontFamily:"Alkatra"}}>Thank you for shopping.</Typography>
          <Box margin="1rem 0rem" textAlign="center">
          <Button onClick={backToHome} sx={{color:"#fff"}}  variant="contained">
            Back To Home
          </Button>
          </Box>
         
        </Box>
      ) : (
        <Box padding={MediumDevicesDown?"1rem":"2rem"}>
          <img src={Payout} alt=""  width={MediumDevicesDown?"100%":400}/>
          <Box margin="1rem 0rem" textAlign="center">
          <Button onClick={payment} margin="1rem 0rem" sx={{color:"#fff"}} variant="contained">
            Make Payment
          </Button>
          </Box>
      
        </Box>
      )}
    </Paper>
  );
};

export default Payment;
