import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import SigninPage from './components/Account/SigninPage';
import ContactPage from './components/Contact/ContactPage';
import CreateContact from './components/Contact/CreateContact';
import theme from './theme';
import { useState } from 'react';
function App() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  //handle email validation
  const validateEmail = email => {
    if(email.length > 5 && email.endsWith(".com")){
      setIsEmailVerified(true)
    }else{
      setIsEmailVerified(false)
    }
  };
  const validatePassword = password => {};
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={
            isCurrentUser ? (
              <Navigate replace to="/" />
            ) : (
              <Navigate replace to="/signin" />
            )
          } />
          <Route
            path="/signin"
            element={
              <SigninPage
                loginEmail={loginEmail}
                setLoginEmail={setLoginEmail}
                loginPassword={loginPassword}
                setLoginPassword={setLoginPassword}
                isEmailVerified={isEmailVerified}
                setIsEmailVerified={setIsEmailVerified}
                validateEmail={validateEmail}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/newcontact" element />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
