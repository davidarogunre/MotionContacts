import React from 'react'
import {useState} from "react"
import {Box} from "@chakra-ui/react"
import Contact from './Contact'
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      id:1,
      owner_id:1,
      name:"David Arogunre",
      email:"davidarogunre@gmail.com",
      phonenumber:"08062389217"
  },
  {
    id:2,
    owner_id:2,
    name:"Mary Arogunre",
    email:"maryarogunre@gmail.com",
    phonenumber:"08062389217"
  }
])
  return (
    <Box>
      {contacts.map((contact)=>{
        return(
          <Box>
              <Contact contact={contact}/>
              
          </Box>
          
        )
      })}
    </Box>
  )
}

export default Contacts