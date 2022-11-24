import { ChakraProvider } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import SigninPage from './components/Account/SigninPage';
import ContactPage from './components/Contact/ContactPage';
import CreateContact from './components/Contact/CreateContact';
import Signup from './components/Account/SignupPage'
import Dashboard from './components/Dashboard/Dashboard';
import theme from './theme'
import { useState } from 'react';
import Cookies from 'js-cookie'
import Loading from './components/Loading/Loading';
interface User{
  name?:string
  email?:string
  id?:number
  contacts?:{}[]
}
function App() {
  //states for management of info
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [CurrentUser, setCurrentUser] = useState<User>({});
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [isSignupEmailValid, setIsSignupEmailValid] = useState(false);
  const [signupPostError, setSignupPostError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signinPostError, setSigninPostError] = useState(null);
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [contacts, setContacts] = useState([])

  //handle email validation
  const moveOn = (email)=> {
    if(email===''){
      setIsEmailVerified(false)
    }else{
      setIsEmailVerified(true)  

    }
  }
  //Clear user input
  const clearSignup = () => {
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
  };
  const validatePassword = (password:string, confirmpass:string) => {
    if (password === confirmpass) {
      return true;
    } else {
      return false;
    }
  };
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
        let response = await fetch('https://motioncontactsbackend.hop.sh/users/', POST);

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

    let POST = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(`grant_type=&username=${loginEmail}&password=${loginPassword}&scope=&client_id=&client_secret=`)
    };
    try {
      let response = await fetch('https://motioncontactsbackend.hop.sh/token', POST);
      let value = await response.json()
      if (!response.ok) {
        throw Error("Incorret username or password");
      }
      Cookies.set("token", value["access_token"])
      setSigninPostError(null)
      setIsLoading(false);
    } catch (err) {
      Cookies.remove("token")
      setSigninPostError(err.message);
      setIsLoading(false);
    }
  }
 const createContact = async () => {
  setIsLoading(true);
  let data = {
    name: contactName,
    email:contactEmail,
    phonenumber:contactNumber
  }
  let POST = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*",
    },
    body:JSON.stringify(data)
  }
  try{
    let response = await fetch(`https://motioncontactsbackend.hop.sh/users/${CurrentUser.id}/item`, POST)
    if (!response.ok) {
      throw Error("There was an issues in creating your contact. Please try again");
  }
  setIsLoading(false)
  setSignupPostError(null)
}catch(err){
  setSignupPostError(err.message)
  setIsLoading(false)
}

 }
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
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
                  moveOn={moveOn}
                  signin={signin}
                  signinPostError={signinPostError}
              
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
          <Route path="/dashboard" element={<Dashboard contacts={contacts} setContacts={setContacts} CurrentUser={CurrentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="/user/newcontact" element={<CreateContact createContact= {createContact} isLoading={isLoading} contactName={contactName} setContactName={setContactName} contactEmail={contactEmail} setContactEmail = {setContactEmail} contactNumber={contactNumber} setContactNumber={setContactNumber}/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
