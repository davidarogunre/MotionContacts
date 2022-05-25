import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import SigninPage from './components/Account/SigninPage';
import ContactPage from './components/Contact/ContactPage';
import CreateContact from './components/Contact/CreateContact';
import Signup from './components/Account/SignupPage'
import theme from './theme';
import { useState } from 'react';

function App() {
  // CRUD options
  const optionFunc = (method, body) =>{
    return{
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(body)
    }
  }

  //states for management of info
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
  const [isSignupEmailValid, setIsSignupEmailValid] = useState(false)

  //handle email validation
  const validateEmail = email => {
    if(email.length > 5 && email.endsWith(".com")){
      setIsEmailVerified(true)
      setIsEmailValid(true)
    }else{
      setIsEmailVerified(false)
      setIsEmailValid(false)
    }
  };
  const validateSignupEmail = email => {
    if(email.length > 5 && email.endsWith(".com")){
      setIsSignupEmailValid(true)
      return true
    }else{
      return false
    }
  };
  const validatePassword = (password, confirmpass)=> {
    if(password === confirmpass){
      return true
    }else{
      return false
    }
  };

  const sendInfo = (name, email, password) =>{
    if(validateSignupEmail(signupEmail) || validatePassword(signupPassword, signupConfirmPassword )){

    }else{
      
    }
  }
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
                isEmailValid={isEmailValid}
              />
            }
          />
          <Route path="/signup" element={<Signup signupName={signupName} setSignupName={setSignupName} signupEmail={signupEmail} setSignupEmail={setSignupEmail} signupPassword={signupPassword} setSignupPassword={setSignupPassword} signupConfirmPassword={signupConfirmPassword} setSignupConfirmPassword={setSignupConfirmPassword} sendInfo={sendInfo}/>}/>
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/newcontact" element />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
