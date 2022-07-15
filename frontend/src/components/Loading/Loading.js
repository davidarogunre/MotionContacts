import { Spinner, Center } from '@chakra-ui/react'
function Loading() {
  return (
    <Center width="100vw" height="100vh">
    <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
</Center>
  )
}

export default Loading