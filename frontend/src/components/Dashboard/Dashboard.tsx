import React from 'react'
import Cookies from 'js-cookie'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {Box} from "@chakra-ui/react"
import Navbar from "./Navbar"

interface User{
  name?:string
  email?:string
  id?:number
  contacts?:{}[]
}
function Dashboard() {
  let navigate = useNavigate()
  const [user, setUser] = useState<User>({})
  useEffect(()=>{
    let token = Cookies.get("token")
    if(token){
        fetch("http://localhost:8000/users/me", {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            Authorization : "Bearer "+token
          }
        }).then((res)=>{
          if(res.status !== 200){
            navigate("/signin")
          }
        })
    }else{
      navigate("/signin")
    }
  },[])

  useEffect(()=>{
    let token = Cookies.get("token")
    fetch("http://localhost:8000/users/me", {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            Authorization : "Bearer "+token
          }
        }).then(res=>res.json()).then((data)=>{
          setUser(data)
        })
  },[])
  return (
    <Box>
      <Navbar user = {user}/>
      
      </Box>
  )
}

export default Dashboard