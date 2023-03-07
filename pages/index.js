import { Box } from '@chakra-ui/react'
import FeaturedBlog from '../components/FeaturedBlog'
import Footer from '../components/Footer/Footer'
import Introduction from '../components/Introduction'
import NavBar from '../components/NavBar/NavBar'
import PersonalStats from '../components/PersonalStats'
import Timeline from '../components/Timeline/Timeline'

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
      <NavBar page='home'/>
      <Introduction/>
      {/* <FeaturedBlog /> */}
      <PersonalStats/>
      <Timeline />
      <Footer/>
    </Box>
  )
}
