import logo from "./googlelogo.png"
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
  import '@fontsource/open-sans/400.css'
  import {useNavigate } from 'react-router-dom';
  function SigninEmail({loginEmail, setLoginEmail, validateEmail, isEmailValid}) {
    const navigate = useNavigate()
    return (
      <Box fontFamily="Open Sans" width="450px" height="500px" border="0.12rem solid whitesmoke" borderRadius="5px" margin="50px auto 0 auto">
        <Image src={logo} width="100px" margin="40px 0 0 170px"/>
        <Text margin="5px 0 0 172px" fontSize="2rem">Sign in</Text>
        <Text margin="15px 0 0 125px" fontSize="1.2rem">Use your Motion Account</Text>
        <Box width="80%" margin="0 auto">
        
      <FormControl variant="floating" id="email" width="50%" margin="30px 20px 0 0" isInvalid={!isEmailValid}>
            <Input placeholder=" " borderRadius="3px" width="370px" padding="25px 15px" value = {loginEmail} onChange={(e)=>setLoginEmail((e.target.value).trim())}/>
            <FormLabel paddingTop="7px" fontWeight="100">Email</FormLabel>
            {!isEmailValid && <FormErrorMessage fontWeight="bold">! This email is not valid</FormErrorMessage>}
            <Box display="flex" justifyContent="space-between" width="370px" marginTop="130px">
            <Button colorScheme='blue' variant='ghost' borderRadius="3px" onClick={()=> navigate('/signup')}>Create Account</Button>
            
            <Button colorScheme='blue' borderRadius="5px" variant='solid' onClick={()=>validateEmail(loginEmail)}>Next</Button>
            </Box>
      </FormControl>
      </Box>
      </Box>
    )
  }
export default SigninEmail