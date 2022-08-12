import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import { Box } from '@chakra-ui/react';

function Home() {
  return (
    <Box>
      <Navbar/>
      <Intro/>
    </Box>
  )
}

export default Home