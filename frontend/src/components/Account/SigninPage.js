import {
  FormControl,
  // FormErrorMessage,
  // FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import '@fontsource/open-sans/400.css';
import Email from './Email';
import Password from './Password'

function SigninPage({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  isEmailVerified,
  validateEmail,
  setIsEmailVerified
}) {
  return (
    isEmailVerified ? (
    <Password setIsEmailVerified={setIsEmailVerified} loginPassword={loginPassword} setLoginPassword={setLoginPassword}/>
    ):
    (
      <Email loginEmail={loginEmail} setLoginEmail={setLoginEmail} validateEmail={validateEmail}/>
    )
  
  )
}

export default SigninPage;
