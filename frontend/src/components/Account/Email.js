import logo from "./googlelogo.png"
import {
    FormControl,
    // FormErrorMessage,
    // FormHelperText,
    FormLabel,
    Input,
    Box,
    Text,
    Button,
    Image
  } from "@chakra-ui/react";
  import '@fontsource/open-sans/400.css'

  function Email({loginEmail, setLoginEmail}) {
    return (
      <Box fontFamily="Open Sans" width="450px" height="500px" border="0.12rem solid whitesmoke" borderRadius="5px" margin="50px auto 0 auto">
        <Image src={logo} width="100px" margin="40px 0 0 170px"/>
        <Text margin="5px 0 0 172px" fontSize="2rem">Sign in</Text>
        <Text margin="15px 0 0 125px" fontSize="1.2rem">Use your Google Account</Text>
        <Box width="80%" margin="0 auto">
        
      <FormControl variant="floating" id="first-name" width="50%" margin="30px 20px 0 0">
            <Input placeholder=" " borderRadius="3px" width="370px" padding="25px 15px" value = {loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
            <FormLabel paddingTop="7px" fontWeight="100">Email</FormLabel>
            <Box display="flex" justifyContent="space-between" width="370px" marginTop="130px">
            <Button colorScheme='blue' variant='ghost' borderRadius="3px">Create Account</Button>
            
            <Button colorScheme='blue' borderRadius="5px" variant='solid'>Next</Button>
            </Box>
      </FormControl>
      </Box>
      </Box>
    )
  }
export default Email