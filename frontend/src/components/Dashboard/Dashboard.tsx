import React from 'react'
import Cookies from 'js-cookie'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {Box} from "@chakra-ui/react"
import Navbar from "./Navbar"
import Contacts from "./Contacts"

function Dashboard({contacts, setContacts, CurrentUser, setCurrentUser}) {

  useEffect(()=>{
    let token = Cookies.get("token")
    fetch("https://motioncontactsbackend.hop.sh/users/me", {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            Authorization : "Bearer "+token
          }
        }).then(res=>res.json()).then((data)=>{
          setCurrentUser(data)
          setContacts(data.contacts)
        })
  },[])
  return (
    <Box>
      <Navbar user = {CurrentUser}/>
      <Contacts contacts={contacts}/>
      </Box>
  )
}

export default Dashboard