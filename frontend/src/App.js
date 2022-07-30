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
import CreateContact from './components/Contact/CreateContact';
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
  const [isCurrentUser, setIsCurrentUser] = useState(null);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [isSignupEmailValid, setIsSignupEmailValid] = useState(false);
  const [signupPostError, setSignupPostError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signinPostError, setSigninPostError] = useState(null);

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
  const clearSignup = () => {
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };
  const validatePassword = (password, confirmpass) => {
    if (password === confirmpass) {
      return true;
    } else {
      return false;
    }
  };
  const getCurrentUser = async () =>{
    try{
      let response = await fetch("http://127.0.0.1:8000/users/me")
      if(!response.ok){
        throw Error("There was a problem in logging in")
      }
      let data = await response.json()
    }catch(err){
      setSignupPostError(err.message);
    }
  }
  const sendInfo = async () => {
    setIsLoading(true);
    let data = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    };
    let POST = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    if (validatePassword(signupPassword, signupConfirmPassword)) {
      try {
        let response = await fetch('https://motioncontacts-production.up.railway.app/users/', POST);

        if (!response.ok) {
          throw Error('There was a problem in logging in');
        }
        setSignupPostError(null);
        clearSignup();
        setIsLoading(false);

      } catch (err) {
        setSignupPostError(err.message);
        setIsLoading(false);
      }
    }
  };

  const signin = async () => {
    setIsLoading(true);
    let data = {
      username: loginEmail,
      password: loginPassword,
    };
    let POST = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(`grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`)
    };
    try {
      let response = await fetch('https://motioncontacts-production.up.railway.app/token', POST);
      if (!response.ok) {
        throw Error(response.text);
      }
      console.log(response)
      setIsLoading(false);
      setSigninPostError(null);
      setIsCurrentUser(data)
    } catch (err) {
      setSignupPostError(err.message);
      setIsLoading(false);
    }
  };
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
              isLoading ? (
                <Loading />
              ) : (
                <SigninPage
                  loginEmail={loginEmail}
                  setLoginEmail={setLoginEmail}
                  loginPassword={loginPassword}
                  setLoginPassword={setLoginPassword}
                  isEmailVerified={isEmailVerified}
                  setIsEmailVerified={setIsEmailVerified}
                  validateEmail={validateEmail}
                  isEmailValid={isEmailValid}
                  signin={signin}
                />
              )
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
                  signupPostError={signupPostError}
                />
              )
            }
          />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/newcontact" element={<CreateContact/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
