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
  return signupPostError ? (
    <p color="red">{signupPostError}</p>
  ) : (
    <Box
      fontFamily="Open Sans"
      width={"450px"}
      height="500px"
      border="0.12rem solid whitesmoke"
      borderRadius="5px"
      margin="50px auto 0 auto"
    >
      <Image src={logo} width="100px" margin="30px 0 0 170px" />
      <Text margin="3px 0 0 80px" fontSize="2rem">
        Create an Account
      </Text>
      <Text margin="10px 0 0 93px" fontSize="1.2rem">
        Create your Motion Account
      </Text>
      <Box width="80%" margin="0 auto">
        <form onSubmit={(e) => {
              e.preventDefault()
              sendInfo()
            }}>
        <FormControl
          variant="floating"
          id="name"
          width="50%"
          margin="10px 20px 0 0"
        >
          <Input
            placeholder=" "
            borderRadius="3px"
            width="370px"
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
          width="50%"
          margin="5px 20px 0 0"
        >
          <Input
          type="email"
            placeholder=" "
            borderRadius="3px"
            width="370px"
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
          width="50%"
          margin="5px 20px 0 0"
        >
          <Input
            type={passwordType ? 'password' : 'text'}
            placeholder=" "
            borderRadius="3px"
            width="370px"
            padding="25px 15px"
            value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}
            isRequired

          />

          <FormLabel paddingTop="7px" fontWeight="100">
            Password
          </FormLabel>
        </FormControl>
        <Checkbox
          onChange={() => setPasswordType(!passwordType)}
          marginTop="5px"
          checked = {passwordType}
        >
          Show Password
        </Checkbox>
        <FormControl
          variant="floating"
          id="password"
          width="50%"
          margin="10px 20px 0 0"
        >
          <Input
            type="password"
            placeholder=" "
            borderRadius="3px"
            width="370px"
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
          width="370px"
          marginTop="4px"
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

  );
}
export default SignupPage;
