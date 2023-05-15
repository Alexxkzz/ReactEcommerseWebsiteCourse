import React, { memo } from 'react'
import Caraousal from "../components/Caraousal"
import Slider from '../components/Slider'
import Category from "../components/Category"
import { Box } from '@mui/material'


function Home() {
  console.log("Home")
  return (
    <Box>
      <Caraousal/>
      <Slider />
      <Category/>
    </Box>
  )
}

export default memo(Home)