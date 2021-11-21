import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { FaGithub, FaGoogle, FaMicrosoft } from 'react-icons/fa'
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
      <Heading mt='8'>Get in touch</Heading>
      <Box my='8'>
        <Flex align='center'>
            <FaMicrosoft/> 
            <Text ml='2' fontSize='md'>20dung.nht@vinuni.edu.vn</Text>
        </Flex>
        <Flex align='center'>
            <FaGoogle/> 
            <Text ml='2' fontSize='md'>dungnguyenhoangtrung@gmail.com</Text>
        </Flex>
      </Box>

      <Footer/>
    </Box>
  )
}