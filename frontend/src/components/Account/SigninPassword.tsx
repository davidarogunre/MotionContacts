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
function SigninPassword({
  setIsEmailVerified,
  loginPassword,
  setLoginPassword,
  signin
}) {
  const [passwordType, setPasswordType] = useState(true);
  return (
    <Box
      fontFamily="Open Sans"
      width="450px"
      height="500px"
      border="0.12rem solid whitesmoke"
      borderRadius="5px"
      margin="50px auto 0 auto"
    >
      <Image src={logo} width="100px" margin="40px 0 0 170px" />
      <Text margin="5px 0 0 172px" fontSize="2rem">
        Sign in
      </Text>
      <Text margin="15px 0 0 125px" fontSize="1.2rem">
        Use your Motion Account
      </Text>
      <Box width="80%" margin="0 auto">
        <FormControl
          variant="floating"
          id="password"
          width="50%"
          margin="30px 20px 0 0"
        >
          <Input
            type={passwordType ? 'password' : 'text'}
            placeholder=" "
            borderRadius="3px"
            width="370px"
            padding="25px 15px"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />

          <FormLabel paddingTop="7px" fontWeight="100">
            Password
          </FormLabel>
          <Box
            display="flex"
            justifyContent="space-between"
            width="370px"
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

            <Button colorScheme="blue" borderRadius="5px" variant="solid" onClick={signin}>
              Next
            </Button>
          </Box>
        </FormControl>
        <Checkbox
          transform="translateY(-150px)"
          onChange={() => setPasswordType(!passwordType)}
        >
          Show Password
        </Checkbox>
      </Box>
    </Box>
  );
}
export default SigninPassword;
