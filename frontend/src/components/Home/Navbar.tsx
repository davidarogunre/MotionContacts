import React from 'react'
import { Box, Button} from '@chakra-ui/react';
import '@fontsource/roboto/400.css'
import {Link} from "react-router-dom"
function Navbar() {
  const listStyleRemove = {listStyle:"none"}
  return (
    <Box width="90%" maxWidth="1600px" backgroundColor="white" height="60px" margin="16px auto 0 auto" display="flex" justifyContent="space-between" fontFamily="Roboto">
        <Box width="10%" height="inherit" display="flex" alignItems="center" fontSize="25px">
            Logo
        </Box>
        <Box width={{md:"350px", xl:"450px"}} display={{base:"none", md:"flex"}} justifyContent="space-between" height="inherit" alignItems="center" fontSize="19px">
            <li style={listStyleRemove}>
                Features
            </li>
            <li style={listStyleRemove}>
                How it works
            </li>
            <li style={listStyleRemove}>
                Pricing
            </li>
        </Box>
        <Box width={{base:"150px", xl:"175px"}} display="flex" justifyContent="space-between" height="inherit" alignItems="center">
            <Box><Link to="/signin">Login</Link></Box>
            <Button colorScheme="blue" borderRadius="5px" variant="solid">Register</Button>
        </Box>
    </Box>
  )
}

export default Navbar