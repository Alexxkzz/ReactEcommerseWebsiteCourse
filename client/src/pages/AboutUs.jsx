import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material"
import { memo } from "react";
const AboutUs = () => {
  console.log("About us called");
  const theme=useTheme();
  const img="https://dbaasltd.co.in/img/ecommerce.gif";
  const MediumDevicesDown=useMediaQuery("(max-width:900px)")
  return (
    
    <Box display={"grid"} gridTemplateColumns="repeat(2,1fr)" margin="6rem 0rem" sx={{
      [theme.breakpoints.down("md")]:{
        gridTemplateColumns:"repeat(1,1fr)",
        margin:"6rem 0rem 2rem 0rem"
      }
    }}>
      <Box display={"flex"}  justifyContent={"center"} flexDirection={"column"} padding="3rem" order={MediumDevicesDown&&2}> 
        <Typography sx={{fontFamily:"Alkatra",fontSize:"2rem",color:theme.palette.mode==="dark"&&"#fff"}} >
          About Us
        </Typography>
        <Typography sx={{fontFamily:"Roboto",fontSize:"1rem",color:theme.palette.mode==="dark"&&"#fff"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ullam iusto esse minima iste dolor. Recusandae nobis expedita neque suscipit a accusamus? Amet necessitatibus iste repellat nihil praesentium fugit nisi repudiandae tempore esse dolorum velit excepturi voluptate beatae cumque nostrum sunt, fugiat magni. Harum repudiandae pariatur ut, voluptatem labore rem!l Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam architecto ducimus pariatur quo accusamus soluta dicta, nisi eveniet rerum cum?
        </Typography>
      </Box>
      <Box textAlign="center" order={MediumDevicesDown&&1}>
        <img src={img} alt="img" width={MediumDevicesDown?300:600} />
      </Box>
      
    </Box>
  )
}

export default memo(AboutUs)