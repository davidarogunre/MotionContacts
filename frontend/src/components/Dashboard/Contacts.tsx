import Title from "./Title"
import {
  Table,
  Tbody,
  TableContainer,

} from "@chakra-ui/react"
import Contact from './Contact'
function Contacts({contacts}) {

  return (
    <TableContainer width="95%" margin="0 auto">
      <Table>
        <Title/>
        <Tbody>
      {contacts.map((contact)=>{
        return(
              <Contact key={contact.id} contact={contact}/>
        )
      })}
      </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Contacts