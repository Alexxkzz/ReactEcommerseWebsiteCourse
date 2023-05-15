import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch} from "react-redux";

const InputField = styled(TextField)`
  width: 100%;
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

const CreateAccountInitialValues = {
  name: "",
  email: "",
  phonenumber: "",
  password: "",
  confirmpassword: "",
};
const errors = {
  name: {
    error: null,
    errorMessage: "",
  },
  email: {
    error: null,
    errorMessage: "",
  },
  phonenumber: {
    error: null,
    errorMessage: "",
  },
  password: {
    error: null,
    errorMessage: "",
  },
  confirmpassword: {
    error: null,
    errorMessage: "",
  },
};
let filterObject = {
  name: "",
  email: "",
  phonenumber: "",
  password: "",
  confirmpassword: "",
};

const CreateAccount = ({
  setActiveStep,
  setCompleted,
  setSnackbar,
  MediumDevicesDown,
}) => {
  const theme = useTheme();
  // const Users = useSelector((store) => store.state.user);
  // console.log("function called" ,Users)
  const dispatch = useDispatch();
  const [account, setAccount] = useState(CreateAccountInitialValues);
  const [error, setError] = useState(errors);
  const getValues = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value.trim() });
    setError((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        errorMessage: "",
      },
    }));
  };

  const validateValues = () => {
    // console.log("hello")
    Object.entries(account).forEach((inputvalues) => {
      const key = inputvalues[0];
      const value = inputvalues[1];

      if (key === "name") {
        let regex = /^([a-zA-Z]){1,}\s([a-zA-Z]){1,}$/;

        if (regex.test(value)) {
          filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            name: {
              ...prev.name,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              name: {
                ...prev.name,
                error: true,
                errorMessage: "Name is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              name: {
                error: true,
                errorMessage: "Enter a valid name e.g. John Doe",
              },
            }));
          }
        }
      }
      if (key === "email") {
        let regex = /^([a-zA-Z/.]){1,}@([a-zA-Z]){1,}\.([a-zA-Z]){1,}$/;
        if (regex.test(value)) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            email: {
              error: false,
              errorMessage: "",
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              email: {
                ...prev.email,
                error: true,
                errorMessage: "Email is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              email: {
                ...prev.email,
                error: true,
                errorMessage: "Enter a valid email e.g. abc@abc.com",
              },
            }));
          }
        }
      }
      if (key === "phonenumber") {
        let regex = /^[0-9]{10}$/;
        if (regex.test(value)) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            phonenumber: {
              ...prev.phonenumber,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              phonenumber: {
                ...prev.phonenumber,
                error: true,
                errorMessage: "Phone Number is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              phonenumber: {
                error: true,
                errorMessage: "Enter a valid phonenumber",
              },
            }));
          }
        }
      }
      if (key === "password") {
        let regexOne = /^[A-Z]/;
        let regexTwo = /[!@#$%^&*]{1,}/g;
        let regexThree = /[0-9]{1,}/g;
        let regexFour = /[A-Za-z0-9!@#$%^&*]{7,20}$/;
        if (
          regexOne.test(value) &&
          regexTwo.test(value) &&
          regexThree.test(value) &&
          regexFour.test(value)
        ) {
            filterObject = {...filterObject,[key]:value};
          setError((prev) => ({
            ...prev,
            password: {
              ...prev.password,
              error: false,
            },
          }));
        } else {
          if (value.length === 0) {
            setError((prev) => ({
              ...prev,
              password: {
                ...prev.password,
                error: true,
                errorMessage: "Password is required!",
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              password: {
                error: true,
                errorMessage:
                  "Enter a valid password with at least \n one numeric chracter, \n one special character ,\n must start with capital letter \nand minimum length of 6",
              },
            }));
          }
        }
      }
      if (key === "confirmpassword") {
        // console.log(filterObject)
        if (value.length === 0) {
          setError((prev) => ({
            ...prev,
            confirmpassword: {
              ...prev.confirmpassword,
              error: true,
              errorMessage: "Confirm Password is required!",
            },
          }));
        } else {
          if (value === filterObject.password) {
            setError((prev) => ({
              ...prev,
              confirmpassword: {
                ...prev.confirmpassword,
                error: false,
              },
            }));
          } else {
            setError((prev) => ({
              ...prev,
              confirmpassword: {
                error: true,
                errorMessage: "Password does not match",
              },
            }));
          }
        }
      }
    });
  };
  console.log(error);

  useEffect(() => {
    if (
      error.name.error !== null &&
      !error.name.error &&
      error.email.error !== null &&
      !error.email.error &&
      error.phonenumber.error !== null &&
      !error.phonenumber.error &&
      error.password.error !== null &&
      !error.password.error &&
      error.confirmpassword.error !== null &&
      !error.confirmpassword.error
    ) {
      console.log(typeof(filterObject));
      dispatch(addUser(filterObject));
      setCompleted((prev) => ({ ...prev, stepOne: true }));
      setActiveStep(1);
      setSnackbar({ open: true, message: "Account Created Sucesfully!" });
    }
  }, [
    dispatch,
    setSnackbar,
    setActiveStep,
    setCompleted,
    error.name.error,
    error.email.error,
    error.phonenumber.error,
    error.password.error,
    error.confirmpassword.error,
  ]);
  return (
    <Paper
      sx={{
        width: MediumDevicesDown ? "90%" : "50%",
        margin: "1rem",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        marginBottom="2rem"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={MediumDevicesDown ? "1rem" : "1rem 3rem"}
      >
        <Typography sx={{ fontSize: "1.5rem", fontFamily: "Alkatra" }}>
          Create An Account
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
          mt="1rem"
        >
          <Box width="100%">
            <InputField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              onChange={(e) => getValues(e)}
              autoComplete="off"
              error={error.name.error}
              sx={{ background: theme.palette.background.main }}
            />
            {error.name.error === true && (
              <WarningText>{error.name.errorMessage}</WarningText>
            )}
          </Box>
          <Box width="100%">
            <InputField
              label="Email"
              variant="outlined"
              name="email"
              onChange={(e) => getValues(e)}
              fullWidth
              autoComplete="off"
              error={error.email.error}
              sx={{ background: theme.palette.background.main }}
            />
            {error.email.error === true && (
              <WarningText>{error.email.errorMessage}</WarningText>
            )}
          </Box>
          <Box width="100%">
            <InputField
              label="Phone Number"
              variant="outlined"
              name="phonenumber"
              onChange={(e) => getValues(e)}
              fullWidth
              autoComplete="off"
              error={error.phonenumber.error}
              sx={{ background: theme.palette.background.main }}
            />
            {error.phonenumber.error === true && (
              <WarningText>{error.phonenumber.errorMessage}</WarningText>
            )}
          </Box>
          <Box width="100%">
            <InputField
              label="Password"
              variant="outlined"
              name="password"
              onChange={(e) => getValues(e)}
              fullWidth
              autoComplete="off"
              error={error.password.error}
              type="password"
              sx={{ background: theme.palette.background.main }}
            />
            {error.password.error === true && (
              <WarningText sx={{ whiteSpace: "pre-line" }}>
                {error.password.errorMessage}
              </WarningText>
            )}
          </Box>
          <Box width="100%">
            <InputField
              label="Confirm Password"
              variant="outlined"
              name="confirmpassword"
              onChange={(e) => getValues(e)}
              fullWidth
              autoComplete="off"
              error={error.confirmpassword.error}
              type="password"
              sx={{ background: theme.palette.background.main }}
            />
            {error.confirmpassword.error === true && (
              <WarningText>{error.confirmpassword.errorMessage}</WarningText>
            )}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ mt: "2rem", color: "#fff" }}
              onClick={validateValues}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default memo(CreateAccount);
