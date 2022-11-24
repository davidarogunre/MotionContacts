import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  // FormHelperText,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  Image
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import '@fontsource/open-sans/400.css'
import Loading from "../Loading/Loading"
function CreateContact({createContact, isLoading, contactName, setContactName, contactEmail, setContactEmail, contactNumber, setContactNumber}) {
  let navigate = useNavigate()
  return ( 
    isLoading ? (
      <Loading/>
    ):(
      <Box margin="0px auto" width = "500px">
        <form onSubmit={(e)=>{
          e.preventDefault()
          createContact()
          navigate("/dashboard")
        }}>
      <FormControl variant="floating" id="name" width="50%" margin="10px 0px 0px">
            <Input type="name" placeholder=" " borderRadius="3px" width="100%" padding="25px 15px" value = {contactName} onChange={(e)=>setContactName(e.target.value)}/>
            <FormLabel paddingTop="7px" fontWeight="100">Name</FormLabel>
      </FormControl>
      <FormControl variant="floating" id="email" width="50%" margin="10px 0px">
            <Input type="email" placeholder=" " borderRadius="3px" width="100%" padding="25px 15px" value = {contactEmail} onChange={(e)=>setContactEmail(e.target.value)}/>
            <FormLabel paddingTop="7px" fontWeight="100">Email</FormLabel>
      </FormControl>
      <FormControl variant="floating" id="phonenumber" width="50%" margin="10px 0px">
            <Input placeholder=" " borderRadius="3px" width="100%" padding="25px 15px" value = {contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/>
            <FormLabel paddingTop="7px" fontWeight="100">Phone</FormLabel>
            <Button type="submit" colorScheme="blue" borderRadius="5px" variant="solid" marginTop="10px">
              Save
            </Button>
      </FormControl>
      </form>
    </Box>
    )

  )
}

export default CreateContact