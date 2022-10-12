import React from 'react'
import {useState} from 'react'
import {Box} from "@chakra-ui/react"
function Contact({contact}) {
  const [backgroundColor, setBackgroundColor] = useState(false)
  return (
    <Box width="95%" backgroundColor={backgroundColor?"#F5F5F5":null} margin="10px auto" onMouseOver={()=>setBackgroundColor(true)} onMouseLeave={()=>setBackgroundColor(false)}>
      <Box display="flex" justifyContent="space-between" width="98%" margin="0 auto">
        <Box padding="15px 10px">{contact.name}</Box>
        <Box padding="15px 10px">{contact.email}</Box>
        <Box padding="15px 10px" transform="translateX(-30px)">{contact.phonenumber}</Box>
      </Box>
    </Box>
  )
}

export default Contact