import { Box } from '@chakra-ui/react'
import { LoginForm } from '../../components/Admin/LoginForm'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'
import Dashboard from '../../components/Admin/Dashboard'

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
     {user? <Dashboard/> : <LoginForm/>}
    </Box>
  )
}
