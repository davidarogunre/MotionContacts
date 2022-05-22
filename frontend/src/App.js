import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import LoginPage from './components/Login/LoginPage'
import ContactPage from './components/Contact/ContactPage'

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<ContactPage/>}/>
          </Routes>
        </Router>
    </ChakraProvider>
  );
}

export default App;
