import { useTheme } from '@emotion/react'
import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Policy = () => {
  const themee=useTheme();
  const MediumDevicesDown=useMediaQuery("(max-width:900px)")
  return (
    <Box display="flex" alignItems="center" justifyContent={"center"} flexDirection={"column"}>
      <Typography sx={{fontSize:"2rem",mt:"2rem",fontFamily:"Alkatra",color:"pink"}}>Privacy and Policy</Typography>
      <Paper sx={{width:MediumDevicesDown?"90%":"60%",padding:"2rem",m:"1rem 0rem 3rem",backgroundColor:themee.palette.secondary.main}}>
        <Box m={"1rem 0rem "}>
          <Typography sx={{color:"pink",fontSize:"1.1rem",fontFamily:"Alkatra"}}>
            Introduction
          </Typography>
          <Typography sx={{fontSize:"0.9rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi aut at enim accusamus voluptatibus quam vitae explicabo odio temporibus magnam cum soluta dolor non incidunt, harum molestias eveniet voluptate ullam, adipisci sed atque ipsa aspernatur! Dicta nemo minima asperiores harum, mollitia consequatur officia, dolores unde enim dolor deserunt voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum itaque excepturi ipsam ratione minima expedita ea, corporis ipsa blanditiis.
          </Typography>
        </Box>
        <Box m={"1rem 0rem"}>
          <Typography sx={{color:"pink",fontSize:"1.1rem",fontFamily:"Alkatra"}}>
            Using our services
          </Typography>
          <Typography sx={{fontSize:"0.9rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi aut at enim accusamus voluptatibus quam vitae explicabo odio temporibus magnam cum soluta dolor non incidunt, harum molestias eveniet voluptate ullam, adipisci sed atque ipsa aspernatur! Dicta nemo minima asperiores harum, mollitia consequatur officia, dolores unde enim dolor deserunt voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum itaque excepturi ipsam ratione minima expedita ea, corporis ipsa blanditiis.
          </Typography>
        </Box>
        <Box m={"1rem 0rem"}>
          <Typography sx={{color:"pink",fontSize:"1.1rem",fontFamily:"Alkatra"}}>
            Privacy and Copyright Protection
          </Typography>
          <Typography sx={{fontSize:"0.9rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi aut at enim accusamus voluptatibus quam vitae explicabo odio temporibus magnam cum soluta dolor non incidunt, harum molestias eveniet voluptate ullam, adipisci sed atque ipsa aspernatur! Dicta nemo minima asperiores harum, mollitia consequatur officia, dolores unde enim dolor deserunt voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum itaque excepturi ipsam ratione minima expedita ea, corporis ipsa blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam culpa nulla cum distinctio aspernatur explicabo ducimus, laboriosam laudantium voluptatibus fuga quaerat. Incidunt quis expedita sequi esse veniam molestias ipsam aliquam! Perferendis facere facilis optio neque delectus voluptatem reprehenderit adipisci?
          </Typography>
        </Box>
        <Box m={"1rem 0rem"}>
          <Typography sx={{color:"pink",fontSize:"1.1rem",fontFamily:"Alkatra"}}>
            Your content in our services
          </Typography>
          <Typography sx={{fontSize:"0.9rem"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi aut at enim accusamus voluptatibus quam vitae explicabo odio temporibus magnam cum soluta dolor non incidunt, harum molestias eveniet voluptate ullam, adipisci sed atque ipsa aspernatur! Dicta nemo minima asperiores harum, mollitia consequatur officia, dolores unde enim dolor deserunt voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum itaque excepturi ipsam ratione minima expedita ea, corporis ipsa blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam eum, soluta eligendi magnam assumenda similique id sunt, ex in beatae neque? Dolor, iure ratione at sint ipsa nam delectus rem amet libero itaque iusto consequuntur vel, eos cum minus?
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default Policy