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
  function SigninEmail({loginEmail, setLoginEmail, moveOn}) {
    const navigate = useNavigate()
    return (
      <Box fontFamily="Open Sans" width={{base:"330px", md:"450px"}} height="500px" border="0.12rem solid whitesmoke" borderRadius="5px" margin="50px auto 0 auto">
        <Image src={logo} width="100px" margin="35px auto 0 auto"/>
        <Text textAlign="center" fontSize="2rem" marginTop="6px">Sign in</Text>
        <Text textAlign="center" fontSize="1.2rem" marginTop="10px">Use your Motion Account</Text>
        <Box width="100%" margin="0 auto">
        <form onSubmit={(e)=>{
          e.preventDefault()
          moveOn(loginEmail)
        }}>
      <FormControl variant="floating" id="email" width="90%" margin="30px auto">
            <Input type="email" placeholder=" " borderRadius="3px" width="100%" padding="25px 15px" value = {loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
            <FormLabel paddingTop="7px" fontWeight="100">Email</FormLabel>
            <Box display="flex" justifyContent="space-between" width="100%" marginTop="130px">
            <Button colorScheme='blue' variant='ghost' borderRadius="3px" onClick={()=> navigate('/signup')}>Create Account</Button>
            
            <Button type="submit" colorScheme='blue' borderRadius="5px" variant='solid'>Next</Button>
            </Box>
      </FormControl>
      </form>
      </Box>
      </Box>
    )
  }
export default SigninEmail