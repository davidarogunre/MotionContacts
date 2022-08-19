import React from 'react'
import {Box, Flex, Spacer, Image, Button} from '@chakra-ui/react';
import illustration from './image.jpg'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/300.css'

function Intro() {
  return (
    <Flex direction={{base:"column-reverse", md:"row"}} padding="0" maxWidth="1600px" width="90%" margin={{base:"10px auto 0 auto", md:"25px auto 0 auto", "2xl":"200px auto 0 auto"}} height="500px" alignItems="center">
        <Box backgroundColor="white" width={{base:"90%", md:"50%"}} height="250px" fontFamily="Roboto" fontWeight="400">
          <Box fontSize={{base:"40px", md:"50px", xl:"70px"}} id="header" width="110%" textAlign={{base:"center", md:"initial"}}>
            MotionContacts
          </Box>
          <Box id="desc" width={{md:"100%", xl:"70%"}} fontSize="19px" fontWeight="300" marginTop="10px" textAlign={{base:"center", md:"initial"}}>
              Looking for a better contacts apps, MotionContacts is here.
              MotionContacts is the best contacts app to suit your needs packed
              with features you never knew existed and very fast.
          </Box>
          <Box display={{base:"flex", md:"block"}} justifyContent={{base:"center"}}>
          <Button colorScheme="blue" borderRadius="5px" variant="solid" marginTop={{base:"8px", md:"25px"}}>Register</Button>
          </Box>
        </Box>
        <Spacer/>
        <Image src={illustration} backgroundColor="orange" width={{base:"45%", "2xl":"900px"}} height={{md:"40vw", '2xl':"900px"}}/>
    </Flex>
  )
}

export default Intro 