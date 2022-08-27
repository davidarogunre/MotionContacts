import {
  FormControl,
  // FormErrorMessage,
  // FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import '@fontsource/open-sans/400.css';
import SigninEmail from './SigninEmail';
import SigninPassword from './SigninPassword';

function SigninPage({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  isEmailVerified,
  setIsEmailVerified,
  moveOn,
  signin,
  signinPostError
}) {
  return isEmailVerified ? (
    <SigninPassword
      setIsEmailVerified={setIsEmailVerified}
      loginEmail = {loginEmail}
      loginPassword={loginPassword}
      setLoginPassword={setLoginPassword}
      signin={signin}
      signinPostError={signinPostError}

    />
  ) : (
    <SigninEmail
      loginEmail={loginEmail}
      setLoginEmail={setLoginEmail}
      moveOn={moveOn}
    />
  );
}

export default SigninPage;
