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
  validateEmail,
  setIsEmailVerified,
  isEmailValid,
  signin
}) {
  return isEmailVerified ? (
    <SigninPassword
      setIsEmailVerified={setIsEmailVerified}
      loginPassword={loginPassword}
      setLoginPassword={setLoginPassword}
      signin={signin}
    />
  ) : (
    <SigninEmail
      loginEmail={loginEmail}
      setLoginEmail={setLoginEmail}
      validateEmail={validateEmail}
      isEmailValid={isEmailValid}
    />
  );
}

export default SigninPage;
