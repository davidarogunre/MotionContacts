import React from 'react'
import {
    Box
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
function Navbar() {
  return (
    <Box>
      <ColorModeSwitcher/>
    </Box>
  )
}

export default Navbar