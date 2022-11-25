import {
  Tr,
  Td,
  Button,
  Box
} from "@chakra-ui/react"
import {useState} from "react"
import { AiOutlineDelete } from 'react-icons/ai';



function Contact({contact}) {
  let [backgroundColor, setBackgroundColor] = useState(false)
  return (
    <>
    <Tr backgroundColor = {backgroundColor ? "#e2e8f0" : "white"} onMouseOver={()=>setBackgroundColor(true)} onMouseLeave={()=>setBackgroundColor(false)}>
        <Td>{contact.name}</Td>
        <Td>{contact.email}</Td>
        <Td>{contact.phonenumber}</Td>  
        <Button visibility={backgroundColor? "visible": "hidden"} pos="relative" top="7px" right="0px"><AiOutlineDelete/></Button>
    </Tr>
    </>
  )
}

export default Contact