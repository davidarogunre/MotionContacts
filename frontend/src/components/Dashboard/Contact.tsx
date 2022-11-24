import {
  Tr,
  Td,
} from "@chakra-ui/react"


function Contact({contact}) {
  return (
    <Tr>
        <Td>{contact.name}</Td>
        <Td>{contact.email}</Td>
        <Td>{contact.phonenumber}</Td>  
    </Tr>
  )
}

export default Contact