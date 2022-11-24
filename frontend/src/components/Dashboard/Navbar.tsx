import React from 'react'
import logo from "./favicon.png"
import '@fontsource/roboto/400.css'
import {Link} from 'react-router-dom'
import {
    Box, Image, Input, Button
  } from '@chakra-ui/react';
  interface User{
    name?:string
    email?:string
    id?:number
    contacts?:{}[]
  }
function Navbar({user}) {
  return (
    <Box display="flex" width="95%" backgroundColor="white" height="70px" alignItems="center" justifyContent="space-between" margin= "0 auto" transform="translateX(-10px)">
      <Box display="flex" height= "inherit" alignItems="center">
          <Image src={logo}/>
          <Box fontSize="25px" fontFamily="Roboto" marginLeft="8px">Contacts</Box>
      </Box>
      <Box marginTop="5px"><Input fontSize="17px" placeholder="Search" variant="filled" padding="25px 25px 25px 25px" width="45vw" maxWidth="700px" display={{base:"none", md:"block"}}/></Box>
      <Button colorScheme='blue' variant='solid'><Link to="/user/newcontact">Create Contact</Link></Button>
      <Box>{user.name}</Box>
    </Box>
  )
}

export default Navbar