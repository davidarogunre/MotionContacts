import { Spinner } from '@chakra-ui/react'
function Loading() {
  return (
    <div width="50%" margin="0 auto">
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  
/>
</div>
  )
}

export default Loading