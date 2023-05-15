import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { memo } from "react";
import { FAQone, FAQtwo } from "../data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@emotion/react";

const FAQ = () => {
  const MediumDeviesDown=useMediaQuery("(max-width:900px)")
  const theme=useTheme();
  return (
    <Box>
      <Typography sx={{fontSize:MediumDeviesDown?"1.2rem":"2.5rem",fontFamily:"Alkatra",padding:MediumDeviesDown?".8rem":"2rem",color:theme.palette.mode==="dark"&&"#ffffff"}}>Frequently Asked Questions</Typography>
      <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} padding={MediumDeviesDown?".8rem":"2rem" }sx={{
        [theme.breakpoints.down("md")]:{
          gridTemplateColumns:"repeat(1,1fr)"
        }
      }} gap={"2rem"}>
        <Box>
          {FAQone.map((item, index) => {
            return (
              <Accordion key={index} sx={{backgroundColor:theme.palette.secondary.main}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.Question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.Answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        <Box>
          {FAQtwo.map((item, index) => {
            return (
              <Accordion key={index} sx={{backgroundColor:theme.palette.secondary.main}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.Question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.Answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(FAQ);
