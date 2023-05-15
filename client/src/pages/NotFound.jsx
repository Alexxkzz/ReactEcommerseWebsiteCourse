import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
    const MediumDevicesDown=useMediaQuery("(max-width:600px)")
    const IMG="https://niceillustrations.com/wp-content/uploads/2020/12/Error-color-800px.png"
  return (
    <Box  textAlign={"center"} m={"2rem 0"}>
        <Box>
            <img src={IMG} alt="" width={MediumDevicesDown?200:400}/>
        </Box>
        <Typography sx={{textAlign:"center",color:"pink"}}>
            We're sorry but the page you are looking for does not exist.
        </Typography>
        <Button variant='contained' sx={{color:"#fff",mt:"1rem"}} onClick={()=>navigate("/home")}>
            Back to home
        </Button>

    </Box>
  )
}

export default NotFound