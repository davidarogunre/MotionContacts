import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import Home from './components/Home/Home';
import SigninPage from './components/Account/SigninPage';
import ContactPage from './components/Contact/ContactPage';
// import CreateContact from './components/Contact/CreateContact';
import Signup from './components/Account/SignupPage';
import theme from './theme';
import { useState } from 'react';

import Loading from './components/Loading/Loading';
function App() {
  //states for management of info
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [isSignupEmailValid, setIsSignupEmailValid] = useState(false);
  const [postError, setPostError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //handle email validation
  const validateEmail = email => {
    if (email.length > 5 && email.endsWith('.com')) {
      setIsEmailVerified(true);
      setIsEmailValid(true);
    } else {
      setIsEmailVerified(false);
      setIsEmailValid(false);
    }
  };
  //Clear user input
  const clearSignup = () =>{
    
  }
  const validatePassword = (password, confirmpass) => {
    if (password === confirmpass) {
      return true;
    } else {
      return false;
    }
  };

  const sendInfo = async  () => {
    
    let data = {
      name: signupName,
      email: signupEmail,
      password: signupPassword
    }
    let POST = {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    }
      if (validatePassword(signupPassword, signupConfirmPassword)){
      setIsLoading(true)
      try{
      let response = await fetch("http://127.0.0.1:8000/users", POST)
      
        if(!response.ok){
          throw Error("There was a post error")
        }
        console.log("worked")
        setIsLoading(false)
        setPostError(null)
      }catch(err){
        console.log(err.message)
      }
    }
    }

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isCurrentUser ? (
                <Navigate replace to="/" />
              ) : (
                <Navigate replace to="/signin" />
              )
            }
          />
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
          <Route
            path="/signup"
            element={
              isLoading ? (
                <Loading />
              ) : (
                <Signup
                  signupName={signupName}
                  setSignupName={setSignupName}
                  signupEmail={signupEmail}
                  setSignupEmail={setSignupEmail}
                  signupPassword={signupPassword}
                  setSignupPassword={setSignupPassword}
                  signupConfirmPassword={signupConfirmPassword}
                  setSignupConfirmPassword={setSignupConfirmPassword}
                  sendInfo={sendInfo}
                  postError={postError}
                />
              )
            }
          />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/newcontact" element />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App
