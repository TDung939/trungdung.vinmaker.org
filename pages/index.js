import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <Box 
    as='section' 
    maxW='4xl' 
    mx='auto'
    px={{
      base: '6',
      lg:'8'
    }}
    >
      <NavBar />
    </Box>
  )
}
