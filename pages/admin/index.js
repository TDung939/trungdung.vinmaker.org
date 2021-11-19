import { Box, Button, Text, Heading } from '@chakra-ui/react'
import { LoginForm } from '../../components/Admin/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'

export default function Home() {
  const { user, logout } = useContext(AuthContext)
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
     {user? <Button onClick={() => logout()}>Log out</Button> : 
     <>
        <Box mt='12' mx="auto" textAlign='center'>
            <Heading>You shall not pass! 🧙‍♂️</Heading>
            <Text>without the correct password...</Text>
        </Box>
        <Box my='8' maxW='lg' mx='auto'>
        <LoginForm/>
        </Box>
     </>
     }
    </Box>
  )
}
