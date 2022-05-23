import {
  FormControl,
  // FormErrorMessage,
  // FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import '@fontsource/open-sans/400.css';
import Email from './Email';

function SigninPage({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
}) {
  return <Email loginEmail={loginEmail} setLoginEmail={setLoginEmail} />;
}

export default SigninPage;
