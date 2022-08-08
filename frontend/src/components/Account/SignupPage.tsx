import React from 'react'
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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function SignupPage({
  signupName,
  setSignupName,
  signupEmail,
  setSignupEmail,
  signupPassword,
  setSignupPassword,
  signupConfirmPassword,
  setSignupConfirmPassword,
  sendInfo,
 signupPostError
}) {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true);
  return (
    <Box
      fontFamily="Open Sans"
      width={{base:"330px", md:"450px"}}
      height="520px"
      border="0.12rem solid whitesmoke"
      borderRadius="5px"
      margin="50px auto 0 auto"
    >
      <Image src={logo} width="100px" margin="35px auto 0 auto" />
      <Text textAlign="center" fontSize="2rem" marginTop="6px">
        Create an Account
      </Text>
      <Text textAlign="center" fontSize="1.2rem" marginTop="10px">
        Create your Motion Account
      </Text>
      <Box width="100%" margin="0 auto">
        <form onSubmit={(e) => {
              e.preventDefault()
              sendInfo()
            }}>
        <FormControl
          variant="floating"
          id="name"
          width="90%"
          margin="10px auto"
        >
          <Input
            placeholder=" "
            borderRadius="3px"
            width="100%"
            padding="25px 15px"
            value={signupName}
            onChange={e => setSignupName(e.target.value)}
            isRequired

          />
          <FormLabel paddingTop="7px" fontWeight="100">
            Name
          </FormLabel>
        </FormControl>
        <FormControl
          variant="floating"
          id="email"
          width="90%"
          margin="10px auto"
        >
          <Input
          type="email"
            placeholder=" "
            borderRadius="3px"
            width="100%"
            padding="25px 15px"
            value={signupEmail}
            onChange={e => setSignupEmail(e.target.value.trim())}
            isRequired
          />
          <FormLabel paddingTop="7px" fontWeight="100">
            Email
          </FormLabel>
        </FormControl>
        <FormControl
          variant="floating"
          id="password"
          width="90%"
          margin="10px auto"
        >
          <Input
            type={passwordType ? 'password' : 'text'}
            placeholder=" "
            borderRadius="3px"
            width="100%"
            padding="25px 15px"
            value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}
            isRequired

          />

          <FormLabel paddingTop="7px" fontWeight="100">
            Password
          </FormLabel>
        </FormControl>
        <Box width="100%" marginLeft={{base:"20px", md:"35px"}}>

        <Checkbox
          onChange={() => setPasswordType(!passwordType)}
          marginTop="5px"
          checked = {passwordType}
        >
          Show Password
        </Checkbox>
        </Box>
        <FormControl
          variant="floating"
          id="confirmpassword"
          width="90%"
          margin="10px auto"
        >
          <Input
            type="password"
            placeholder=" "
            borderRadius="3px"
            width="100%"
            padding="25px 15px"
            value={signupConfirmPassword}
            onChange={e => setSignupConfirmPassword(e.target.value)}
            isRequired
          />
          <FormLabel paddingTop="7px" fontWeight="100">
            Confirm Password
          </FormLabel>
          
        </FormControl>

        <Box
          display="flex"
          justifyContent="space-between"
          width="90%"
          margin="4px auto 0 auto"
        >
          <Button
            colorScheme="blue"
            variant="ghost"
            borderRadius="3px"
            onClick={() => navigate('/signin')}
          >
            Sign in
          </Button>

          <Button
          type="submit"
            colorScheme="blue"
            borderRadius="5px"
            variant="solid"

          >
            {' '}
            Next
          </Button>
        </Box>
        </form>
      </Box>
    </Box>

  )
}
export default SignupPage;
