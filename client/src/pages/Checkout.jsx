import React, { memo, useState } from "react";
import {
  Stepper,
  Step,
  Box,
  StepLabel,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import CreateAccount from "../components/CreateAccount";
import ShippingAddresss from "../components/ShippingAddresss";
import Payment from "../components/Payment";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const MediumDevicesDown = useMediaQuery("(max-width:600px)");
  const [activeStep, setActiveStep] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });
  // const Navigate = useNavigate();
  // const cartProducts = useSelector((store) => store.state.cart);

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  const [completed, setCompleted] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
 
  return (
    <Box marginTop="6rem">
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        <Step
          completed={completed.stepOne}
          onClick={() => !completed.stepOne && setActiveStep(0)}
        >
          <StepLabel >Account</StepLabel>
        </Step>
        <Step completed={completed.stepTwo}  onClick={() => !completed.stepTwo && setActiveStep(1)}>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step completed={completed.stepThree}>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box display="flex" alignItems="center" justifyContent="center">
        {activeStep === 0 ? (
          <CreateAccount
            setActiveStep={setActiveStep}
            setCompleted={setCompleted}
            setSnackbar={setSnackbar}
            snackbar={snackbar}
            handleClose={handleClose}
            MediumDevicesDown={MediumDevicesDown}
          />
        ) : activeStep === 1 ? (
          <ShippingAddresss
            setActiveStep={setActiveStep}
            setCompleted={setCompleted}
            setSnackbar={setSnackbar}
            snackbar={snackbar}
            handleClose={handleClose}
            completed={completed}
            MediumDevicesDown={MediumDevicesDown}
          />
        ) : (
          <Payment
            setCompleted={setCompleted}
            completed={completed}
            MediumDevicesDown={MediumDevicesDown}
          />
        )}
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={snackbar.message}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </Box>
  );
};

export default memo(Checkout);
