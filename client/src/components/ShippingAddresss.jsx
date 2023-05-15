import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { memo,useEffect, useState } from "react";
import { addAddress } from "../redux/slice";
import { useDispatch } from "react-redux";

const InputField = styled(TextField)`
  margin-top: 1.5rem;
`;
const WarningText = styled(Typography)`
  font-size: 12px;
  font-family: Roboto;
  color: Red;
  margin-top: 5px;
  padding-left: 2px;
  word-wrap: break-word !important;
`;

const initialValues = {
  country: "",
  fullname: "",
  mobilenumber: "",
  pincode: "",
  apartment: "",
  area: "",
  landmark: "",
  towncity: "",
  state: "",
};
const errors = {
  country: {
    error: null,
    errorMessage: "",
  },
  fullname: {
    error: null,
    errorMessage: "",
  },
  mobilenumber: {
    error: null,
    errorMessage: "",
  },
  pincode: {
    error: null,
    errorMessage: "",
  },
  apartment: {
    error: null,
    errorMessage: "",
  },
  area: {
    error: null,
    errorMessage: "",
  },
  landmark: {
    error: null,
    errorMessage: "",
  },
  towncity: {
    error: null,
    errorMessage: "",
  },
  state: {
    error: null,
    errorMessage: "",
  },
};
let filterObject = {};

const ShippingAddresss = ({
  setCompleted,
  setActiveStep,
  setSnackbar,
  completed,
  MediumDevicesDown
}) => {
  const [address, setAddress] = useState(initialValues);
  const [error, setError] = useState(errors);
  const dispatch = useDispatch();
  const theme=useTheme();

  const handleForm = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    console.log(address);
  };

  const validateValues = () => {
    Object.entries(address).forEach((property) => {
      const key = property[0];
      const value = property[1];

      if (key === "fullname") {
        let regex = /^[a-zA-Z]{1,}\s[a-zA-Z]{1,}/;
        if (regex.test(value) === true) {
          filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            fullname: {
              ...prev.fullname,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              fullname: {
                ...prev.fullname,
                error: true,
                errorMessage: "Name is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              fullname: {
                error: true,
                errorMessage: "Enter a valid name e.g. John Doe",
              },
            }));
          }
        }
      }
      if (key === "mobilenumber") {
        let regex = /^[0-9]{10}$/;
        if (regex.test(value) === true) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            mobilenumber: {
              ...prev.mobilenumber,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              mobilenumber: {
                ...prev.mobilenumber,
                error: true,
                errorMessage: "Mobile Number is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              mobilenumber: {
                error: true,
                errorMessage: "Enter a valid Mobile number",
              },
            }));
          }
        }
      }
      if (key === "pincode") {
        let regex = /^[0-9]{6}$/;
        if (regex.test(value) === true) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            pincode: {
              ...prev.pincode,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              pincode: {
                ...prev.pincode,
                error: true,
                errorMessage: "Pincode is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              pincode: {
                error: true,
                errorMessage: "Enter a valid pincode i.e.400430",
              },
            }));
          }
        }
      }

      if (key === "apartment" || key === "area") {
        let regex = /^[0-9a-zA-Z@/#*,\s]{1,}$/;
        if (regex.test(value) === true) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            [key]: {
              ...prev[key],
              error: false,
            },
          }));
          console.log(error);
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              [key]: {
                ...prev[key],
                error: true,
                errorMessage: `${key} is required!`,
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              [key]: {
                error: true,
                errorMessage: "Enter a valid infromation",
              },
            }));
          }
          console.log(error);
        }
      }

      if (
        key === "landmark" ||
        key === "country" ||
        key === "towncity" ||
        key === "state"
      ) {
        let regex = /^[a-zA-Z]{1,}$/;
        if (regex.test(value) === true) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            [key]: {
              ...prev[key],
              error: false,
            },
          }));
          console.log(error);
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              [key]: {
                ...prev[key],
                error: true,
                errorMessage: `${key} is required!`,
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              [key]: {
                error: true,
                errorMessage: "Enter a valid infromation",
              },
            }));
          }
        }
      }
    });
  }
 
  
  useEffect(() => {
    if (
      error.country.error !== null &&
      !error.country.error &&
      error.fullname.error !== null &&
      !error.fullname.error &&
      error.mobilenumber.error !== null &&
      !error.mobilenumber.error &&
      error.pincode.error !== null &&
      !error.pincode.error &&
      error.area.error !== null &&
      !error.area.error &&
      error.apartment.error !== null &&
      !error.apartment.error &&
      error.landmark.error !== null &&
      !error.landmark.error &&
      error.towncity.error !== null &&
      !error.towncity.error &&
      error.state.error !== null &&
      !error.state.error
    ) {
      dispatch(addAddress(filterObject));
      setCompleted((prev) => ({ ...prev, stepTwo: true }));
      setSnackbar({ open: true, message: "Address submitted succesfullly!" });
      if (completed.stepOne && completed.stepTwo) {
        setActiveStep(2);
      }
      // } else {
      //   // setSnackbar({
      //   //   open: true,
      //   //   message: "Please Complete all steps before Payemnt!",
      //   // });
      // }
    } 
  },[
    dispatch,
    setSnackbar,
    setActiveStep,
    setCompleted,
    completed.stepOne,
    completed.stepTwo,
    error.country.error,
    error.fullname.error,
    error.mobilenumber.error,
    error.pincode.error,
    error.area.error,
    error.apartment.error,
    error.landmark.error,
    error.towncity.error,
    error.state.error,
  ]);
  return (
    <Paper sx={{width:MediumDevicesDown?"90%":"50%", margin: "1rem",backgroundColor:theme.palette.secondary.main }}>
      <Box
        marginBottom="2rem"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding="1rem"
      >
        <Typography sx={{ fontSize: "1.5rem", fontFamily: "Alkatra" }}>
          Shipping Address
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          alignItems="center"
          flexDirection="column"
          mt="1rem"
        >
          <Box width="100%">
            <InputField
              fullWidth
              label="Country"
              variant="outlined"
              name="country"
              onChange={(e) => handleForm(e)}
              autoComplete="off"
              sx={{background:theme.palette.background.main}}
            />
            {error.country.error && (
              <WarningText>{error.country.errorMessage}</WarningText>
            )}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              columnGap: "1rem",
            }}
          >
            <Box>
              <InputField
                label="Full Name"
                variant="outlined"
                name="fullname"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.fullname.error && (
                <WarningText>{error.fullname.errorMessage}</WarningText>
              )}
            </Box>
            <Box>
              <InputField
                label="Mobile Number"
                variant="outlined"
                name="mobilenumber"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.mobilenumber.error && (
                <WarningText>{error.mobilenumber.errorMessage}</WarningText>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              columnGap: "1rem",
            }}
          >
            <Box>
              <InputField
                label="Pincode"
                variant="outlined"
                name="pincode"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.pincode.error && (
                <WarningText>{error.pincode.errorMessage}</WarningText>
              )}
            </Box>
            <Box>
              <InputField
                label="Flat, House no., Apartment"
                variant="outlined"
                name="apartment"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.apartment.error && (
                <WarningText>{error.apartment.errorMessage}</WarningText>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              columnGap: "1rem",
            }}
          >
            <Box>
              <InputField
                label="Area, Street, Sector, Village"
                variant="outlined"
                name="area"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.area.error && (
                <WarningText>{error.area.errorMessage}</WarningText>
              )}
            </Box>
            <Box>
              <InputField
                label="Landmark"
                variant="outlined"
                name="landmark"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.landmark.error && (
                <WarningText>{error.landmark.errorMessage}</WarningText>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              width: "100%",
              columnGap: "1rem",
            }}
          >
            <Box>
              <InputField
                label="Town/City"
                variant="outlined"
                name="towncity"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.towncity.error && (
                <WarningText>{error.towncity.errorMessage}</WarningText>
              )}
            </Box>
            <Box>
              <InputField
                label="State"
                variant="outlined"
                name="state"
                onChange={(e) => handleForm(e)}
                fullWidth
                autoComplete="off"
                sx={{background:theme.palette.background.main}}
              />
              {error.state.error && (
                <WarningText>{error.state.errorMessage}</WarningText>
              )}
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ mt: "2rem",color:"#fff" }}
              onClick={validateValues}
            >
              Place An Order
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default memo(ShippingAddresss);
