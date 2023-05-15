import { useTheme } from "@emotion/react";
import { Box, Button, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import React, { memo } from "react";

const ContactUs = () => {
  const theme=useTheme();
  const MediumDevicesDown=useMediaQuery("(max-width:900px)")
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      margin={"6rem 0rem"}
    >
      <Typography
        sx={{ fontSize: "1rem", color: "pink", letterSpacing: "2px",[theme.breakpoints.down("sm")]:{
          fontSize: ".7rem"
        } }}
      >
        GOT A QUESTION?
      </Typography>
      <Typography
        sx={{ fontSize: "2.1rem",color:theme.palette.mode==="dark"&& "#fff", fontFamily: "Alkatra", fontWeight: "bolder",[theme.breakpoints.down("sm")]:{
          fontSize: "1.5rem"
        } }}
      >
        Contact Sleeknote
      </Typography>
      <Typography
        sx={{ fontSize: "1rem",color:theme.palette.mode==="dark"&& "#fff", maxWidth: "300px", textAlign: "center",[theme.breakpoints.down("sm")]:{
          fontSize: ".7rem"
        } }}
      >
        We're here to help and answer any question you might have.We look
        forward to hearing from you.
      </Typography>
      <Box marginTop="1rem" width={MediumDevicesDown?"100%":"30%"} padding={MediumDevicesDown?"1rem":"2rem"}>
        <Paper sx={{width:"100%", padding: "1rem",backgroundColor:theme.palette.secondary.main }} >
          <Box
            display="grid"
            gridTemplateColumns="repeat(2,1fr)"
            columnGap={"1rem"}
            sx={{margin:"1rem 0rem"}}
          >
            <Box >
              <TextField
                // error={true}
                label="First Name"
                variant="outlined"
                autoComplete="off"
                sx={{
                  width: "100%",
                  background:theme.palette.background.main
                }}
              />
            </Box>
            <Box  >
              <TextField
                // error={true}
                label="Last Name"
                variant="outlined"
                autoComplete="off"
                sx={{
                  width: "100%",
                  background:theme.palette.background.main
                }}
              />
            </Box>
          </Box>
          <Box  sx={{margin:"1rem 0rem"}}>
            <TextField
              // error={true}
              label="Email"
              variant="outlined"
              autoComplete="off"
              sx={{
                width: "100%",
                background:theme.palette.background.main
              }}
            />
          </Box>
          <Box sx={{margin:"1rem 0rem"}}>
            <TextField
              // error={true}
              label="Message"
              variant="outlined"
              autoComplete="off"
              sx={{
                width: "100%",
                background:theme.palette.background.main
              }}
            />
          </Box>
          <Box sx={{margin:"1rem 0rem",textAlign:"center",color:"#fff!important"}}>
              <Button variant="contained"  sx={{color:"#fff!important"}}>Send Message</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default memo(ContactUs);
