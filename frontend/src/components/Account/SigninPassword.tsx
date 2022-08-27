import logo from './googlelogo.png';
import {
  FormControl,
  // FormErrorMessage,
  // FormHelperText,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  Image,
  Checkbox,
} from '@chakra-ui/react';
import '@fontsource/open-sans/400.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
function SigninPassword({
  setIsEmailVerified,
  loginEmail,
  loginPassword,
  setLoginPassword,
  signin,
  signinPostError
}) {
  let navigate = useNavigate()
  const [passwordType, setPasswordType] = useState(true);
  return (
    <Box
      fontFamily="Open Sans"
      width={{base:"330px", md:"450px"}}
      height="500px"
      border="0.12rem solid whitesmoke"
      borderRadius="5px"
      margin="50px auto 0 auto"
    >
      <Image src={logo} width="100px" margin="35px auto 0 auto" />
      <Text textAlign="center" fontSize="2rem" marginTop="6px">
        Sign in
      </Text>
      <Text textAlign="center" fontSize="1.2rem" marginTop="10px">
        Use your Motion Account
      </Text>
      <Box width="100%" margin="0 auto">
        <form onSubmit={async(e)=>{
          e.preventDefault()
          await signin()
          if (Cookies.get("token") !== null){
            navigate("/dashboard")
          }
          }}>

        <FormControl
          variant="floating"
          id="password"
          width="90%"
          margin="30px auto"
        >
          <Input
            type={passwordType ? 'password' : 'text'}
            placeholder=" "
            borderRadius="3px"
            width="100%"
            padding="25px 15px"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />

          <FormLabel paddingTop="7px" fontWeight="100">
            Password
          </FormLabel>
          {/* 50px without error */}
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            marginTop="130px"
          >
            <Button
              colorScheme="blue"
              variant="ghost"
              borderRadius="3px"
              onClick={() => setIsEmailVerified(false)}
            >
              Back
            </Button>

            <Button type="submit" colorScheme="blue" borderRadius="5px" variant="solid">
              Next
            </Button>
          </Box>
        </FormControl>
        </form>
        <Box width="100%" marginLeft={{base:"20px", md:"35px"}}>
        {/* -210px with err */}
        <Checkbox
          transform="translateY(-180px)"
          onChange={() => setPasswordType(!passwordType)}
        >
          Show Password
        </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}
export default SigninPassword;
