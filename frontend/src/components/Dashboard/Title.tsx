import React from 'react'
import {Box} from "@chakra-ui/react"
import '@fontsource/roboto/400.css'
function Title() {
  return (
    <Box>
    <Box display="flex" width="90%" margin="0 auto" justifyContent="space-between" fontSize="16px" fontFamily="Roboto">
      <Box padding="15px">Name</Box>
      <Box padding="15px">Email</Box>
      <Box padding="15px">Phone Number</Box>
    </Box>
    <Box backgroundColor="whitesmoke" width="92%" height="1px" margin="5px auto"></Box>
    </Box>
  )
}

export default Title