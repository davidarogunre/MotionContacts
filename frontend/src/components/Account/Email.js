import {
    FormControl,
    // FormErrorMessage,
    // FormHelperText,
    FormLabel,
    Input,
    Box,
    Text
  } from "@chakra-ui/react";
  import '@fontsource/open-sans/400.css'
  
  function Email({loginEmail, setLoginEmail}) {
    return (
      <Box fontFamily="Open Sans" width="450px" height="500px" border="0.12rem solid whitesmoke" borderRadius="5px" margin="50px auto 0 auto">
        <Text margin="30px 0 0 175px" fontSize="2rem">Sign in</Text>
        <Box width="80%" margin="0 auto">
        
      <FormControl variant="floating" id="first-name" width="50%" margin="30px 20px 0 0">
            <Input placeholder=" " borderRadius="3px" width="370px" padding="25px 15px" value = {loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
            {/* It is important that the Label comes after the Control due to css selectors */}
            <FormLabel paddingTop="7px" fontWeight="100">Email</FormLabel>
      </FormControl>
      </Box>
      </Box>
    )
  }
export default Email