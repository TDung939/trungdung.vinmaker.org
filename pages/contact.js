import { Box } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <Box 
    as='section' 
    maxW='3xl' 
    mx='auto'
    px={{
      base: '6',
      lg:'8'
    }}
    >
      <NavBar page='contact'/>
      <Footer/>
    </Box>
  )
}