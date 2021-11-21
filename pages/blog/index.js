import { Box, Heading, Text } from '@chakra-ui/react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import BlogCard from '../../components/BlogCard';
import usePosts from '../../lib/getposts';


export default function Home() {
  const { posts, isLoading, isError } = usePosts();
  if (posts?.length == 0) return( <Box 
    as='section' 
    maxW='3xl' 
    mx='auto'
    px={{
      base: '6',
      lg:'8'
    }}
    >
      <NavBar page='blog'/>
      <Heading my='8'>No post yet!</Heading>
      <Footer/>
    </Box>)
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
      <NavBar page='blog'/>
      <Heading mt='8'>All posts</Heading>
      {isLoading? <Heading my='8'>Loading...</Heading> : posts?.map((post, idx) => {
          return (
              <BlogCard key={idx} id={post.id} title={post.title} description={post.description} createdAt={post.createdAt}/>
          )
      })}
      <Footer/>
    </Box>
  )
}

